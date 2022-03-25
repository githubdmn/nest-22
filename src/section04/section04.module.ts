import { Module } from '@nestjs/common';
import { Section04Controller } from './section04.controller';

@Module({
	controllers: [Section04Controller],
})
export class Section04Module {}
