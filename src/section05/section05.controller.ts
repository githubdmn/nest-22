import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	NotFoundException,
} from '@nestjs/common';
import { CreateMessageDTO } from './dto';
import { MessageService } from './service';

@Controller('section05/message')
export class Section05Controller {
	constructor(public ms: MessageService) {}

	@Get('/all')
	listMessages(): any {
		return this.ms.findAll();
	}

	@Get('/:id')
	async getMessage(@Param('id') id: number) {
		const message = await this.ms.findOne(id);
		if (!message) throw new NotFoundException('Message not found');
		return message;
	}

	@Post('/')
	createMessage(@Body() body: CreateMessageDTO) {
		return this.ms.create(body.content);
	}
}
