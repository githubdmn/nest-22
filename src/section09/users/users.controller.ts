import {
	Body,
	Controller,
	Post,
	Get,
	Patch,
	Delete,
	Param,
	Query,
	NotFoundException,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('/auth')
export class UsersController {
	constructor(private userService: UsersService) {}

	@Post('/signup')
	createUser(@Body() body: CreateUserDto) {
		return this.userService.create(body.email, body.password);
	}

	@Get('/:id')
	async findUser(@Param('id') id: string) {
		const user = await this.userService.findOne(parseInt(id));
		if (!user) throw new NotFoundException('User not found');
		return user;
	}

	@Get()
	findAllUsers(@Query('email') email: string) {
		return this.userService.find(email);
	}

	@Delete('/:id')
	removeUser(@Param('id') id: string) {
		return this.userService.remove(parseInt(id));
	}

	// needs new dto
	@Patch('/:id')
	updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
		return this.userService.update(parseInt(id), body);
	}
}
