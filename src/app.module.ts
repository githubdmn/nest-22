import { Module } from '@nestjs/common';
import { Section08Module } from './section08/section08.module';

@Module({
	imports: [Section08Module],
	controllers: [],
	providers: [],
})
export class AppModule {}
