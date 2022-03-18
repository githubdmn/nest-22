import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Section03Module } from './section03/section03.module';

@Module({
  imports: [Section03Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
