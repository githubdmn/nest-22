import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Section05Module } from './section05/section05.module';

@Module({
  imports: [Section05Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
