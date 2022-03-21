import { Module } from '@nestjs/common';
import { MessageRepository } from './repository';
import { Section05Controller } from './section05.controller';
import { MessageService } from './service';

@Module({
	controllers: [Section05Controller],
	providers: [MessageService, MessageRepository],
})
export class Section05Module {}
