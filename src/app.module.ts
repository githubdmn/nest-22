import { Module } from '@nestjs/common';
import { Section10Module } from './section10/section10.module';

@Module({
	imports: [Section10Module],
	controllers: [],
	providers: [],
})
export class AppModule {}
