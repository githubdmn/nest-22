import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dtos';

@Controller('auth')
export class UsersController {
	@Post('/signup')
	createUser(@Body() body: CreateUser) {
		console.log(body);
	}
}
