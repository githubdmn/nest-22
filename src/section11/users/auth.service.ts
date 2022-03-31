import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { UsersService } from './users.service';

const scryptPromise = promisify(scrypt);
const passwordLength = 32;

@Injectable()
export class AuthService {
	constructor(private userService: UsersService) {}

	async signup(email: string, password: string) {
		const users = await this.userService.findByEmail(email);
		if (users.length) throw new BadRequestException('Email is in use');
		const salt = randomBytes(8).toString('hex');
		const hash = (await scryptPromise(
			password,
			salt,
			passwordLength,
		)) as Buffer;
		const result = salt + '.' + hash.toString('hex');
		const user = this.userService.create(email, result);
		return user;
	}

	async signin(email: string, password: string) {
		const [user] = await this.userService.findByEmail(email);
		if (!user) throw new NotFoundException('User not found');
		const [salt, storedHash] = user.password.split('.');
		const hash = (await scryptPromise(
			password,
			salt,
			passwordLength,
		)) as Buffer;
		if (hash.toString('hex') === storedHash) return user;
		else throw new BadRequestException('Bad credentials');
	}
}
