import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dto';

@Controller('/section04/message')
export class Section04Controller {
	@Get('/all')
	listMessages(): string {
		return 'Get all messages';
	}
	@Post('/')
	createMessage(@Body() body: CreateMessageDTO): CreateMessageDTO {
		return body;
	}
	@Get(':id')
	getMessage(@Param() param: number): number {
		return param;
	}
}
