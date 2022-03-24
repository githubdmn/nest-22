import { Module } from '@nestjs/common';
import { Section09Module } from './section09/section09.module';

@Module({
	imports: [Section09Module],
	controllers: [],
	providers: [],
})
export class AppModule {}
