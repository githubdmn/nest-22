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
import { CreateUserDto, UpdateUserDto, UserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
	constructor(private userService: UsersService) {}
	@Post('/signup')
	createUser(@Body() body: CreateUserDto) {
		return this.userService.create(body.email, body.password);
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
