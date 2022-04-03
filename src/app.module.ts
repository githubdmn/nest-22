import { Module } from '@nestjs/common';
import { Section11Module } from './section11/section11.module';

@Module({
	imports: [Section11Module],
	controllers: [],
	providers: [],
})
export class AppModule {}
