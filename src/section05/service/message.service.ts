import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repository';

@Injectable()
export default class MessageService {
	constructor(public messageRepo: MessageRepository) {}
	findOne(id: number) {
		return this.messageRepo.findOne(id);
	}
	findAll() {
		return this.messageRepo.findAll();
	}
	create(content: string) {
		return this.messageRepo.create(content);
	}
}
