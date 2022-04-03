import {
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	Patch,
	Post,
	Query,
	Session,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators';
import { CreateUserDto, UpdateUserDto, UserDto } from './dtos';
import { AuthGuard } from './guards';
import { CurrentUserInterceptor } from './interceptors';
import User from './user.entity';
import { UsersService } from './users.service';

@Controller('auth')
@Serialize(UserDto)
//Remove decorator below and apply it globally
//@UseInterceptors(CurrentUserInterceptor)
export class UsersController {
	constructor(private userService: UsersService, private auth: AuthService) { }

	//TODO: DELETE THIS - USE FOR DEVELOPMENT PURPOSES ONLY
	@Get('/all')
	getAll() {
		return this.userService.findAll();
	}

	@Post('/register')
	createUser(@Body() { email, password }: CreateUserDto) {
		return this.auth.register(email, password);
	}

	@Post('/login')
	login(@Body() { email, password }: CreateUserDto) {
		return this.auth.login(email, password);
	}

	@Get('/:id')
	async findUser(@Param('id') id: string) {
		const user = await this.userService.findById(parseInt(id));
		if (!user) throw new NotFoundException('User not found');
		return user;
	}

	@Get()
	findAllUsers(@Query('email') email: string) {
		return this.userService.findByEmail(email);
	}

	@Delete('/:id')
	removeUser(@Param('id') id: string) {
		return this.userService.remove(parseInt(id));
	}

	@Patch('/:id')
	updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
		return this.userService.update(parseInt(id), body);
	}

	// Route for testing cookie
	@Post('/cookie-test/register')
	async registerCookie(
		@Body() { email, password }: CreateUserDto,
		@Session() session: any,
	) {
		const user = await this.auth.register(email, password);
		session.userId = user.id;
		return user;
	}

	// Route for testing cookie
	@Post('/cookie-test/login')
	async loginCookie(
		@Body() { email, password }: CreateUserDto,
		@Session() session: any,
	) {
		const user = await this.auth.login(email, password);
		session.userId = user.id;
		return user;
	}

	@Get('/cookie-test/my-profile')
	@UseGuards(AuthGuard) // access this path only if user is logged in
	myProfile(@Session() session: any) {
		return this.userService.findById(session.userId);
	}

	@Get('/custom-decorator/my-profile')
	myProfileCustomDecorator(@CurrentUser() user: User) {
		return user;
	}

	@Post('/cookie-test/logout')
	logoutCookie(@Session() session: any) {
		session.userId = null;
	}
}
