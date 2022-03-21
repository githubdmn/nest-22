import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
// import fakeData from '../../data/data.js';

const jsonDataPath = './src/data/data.json';
const format = 'utf8';

@Injectable()
export default class MessageRepository {
	async findOne(id: number): Promise<any> {
		const content = await readFile(jsonDataPath, format);
		const messages: Array<any> = JSON.parse(content);
		return messages.filter((message) => message.id == id).pop();
	}
	async findAll(): Promise<any> {
		const content = await readFile(jsonDataPath, format);
		return JSON.parse(content);
	}
	async create(data: string): Promise<string> {
		const content = await readFile(jsonDataPath, format);
		const messages: Array<any> = JSON.parse(content);
		messages.push({
			id: Math.floor(Math.random() * 999),
			content: data,
		});
		await writeFile(jsonDataPath, JSON.stringify(messages));
		return 'Successfully saved message';
	}
}
