import { Module } from '@nestjs/common';
import { Section05Controller } from './section05.controller';

@Module({
  controllers: [Section05Controller]
})
export class Section05Module {}
