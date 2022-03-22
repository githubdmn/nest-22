import { Module } from '@nestjs/common';
import { Section06Module } from './section06/section06.module';

@Module({
	imports: [Section06Module],
	controllers: [],
	providers: [],
})
export class AppModule {}
