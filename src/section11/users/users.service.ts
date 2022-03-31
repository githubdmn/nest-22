import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private repository: Repository<User>) {}
	create(email: string, password: string) {
		const user = this.repository.create({ email, password });
		return this.repository.save(user);
	}
	findAll() {
		return this.repository.find();
	}
	findById(id: number) {
		return this.repository.findOne(id);
	}
	findByEmail(email: string) {
		return this.repository.find({ email });
	}
	async update(id: number, attrs: Partial<User>) {
		const user = await this.findById(id);
		if (!user) throw new NotFoundException('User not found');
		Object.assign(user, attrs);
		return this.repository.save(user);
	}

	async remove(id: number) {
		const user = await this.findById(id);
		if (!user) throw new NotFoundException('User not found');
		return this.repository.remove(user);
	}
}
