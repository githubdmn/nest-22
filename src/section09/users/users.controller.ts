import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dtos';
import { UsersService } from './users.service';

@Controller('/auth')
export class UsersController {
	constructor(private userService: UsersService) {}

	@Post('/signup')
	createUser(@Body() body: CreateUser) {
		return this.userService.create(body.email, body.password);
	}
}
