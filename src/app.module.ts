import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Section04Module } from './section04/section04.module';

@Module({
  imports: [Section04Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
