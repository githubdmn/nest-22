import { Module } from '@nestjs/common';
import { Section03Controller } from './section03.controller';

@Module({
  controllers: [Section03Controller],
})
export class Section03Module {}
