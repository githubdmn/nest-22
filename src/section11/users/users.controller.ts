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
} from '@nestjs/common';
import { Serialize } from 'src/interceptors';
import { AuthService } from './auth.service';
import { CreateUserDto, UpdateUserDto, UserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
	constructor(private userService: UsersService, private auth: AuthService) {}

	//TODO: DELETE THIS - USE FOR DEVELOPMENT PURPOSES ONLY
	@Get('/all')
	getAll() {
		return this.userService.findAll();
	}

	@Post('/signup')
	createUser(@Body() { email, password }: CreateUserDto) {
		return this.auth.signup(email, password);
	}

	@Post('/signin')
	signin(@Body() { email, password }: CreateUserDto) {
		return this.auth.signin(email, password);
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
}
