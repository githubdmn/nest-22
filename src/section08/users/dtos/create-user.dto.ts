import { IsEmail, IsString } from 'class-validator';

export default class CreateUser {
	@IsEmail()
	email: string;
	@IsString()
	password: string;
}
