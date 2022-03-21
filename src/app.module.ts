import { Module } from '@nestjs/common';
import { Section05Module } from './section05/section05.module';

@Module({
  imports: [Section05Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
