import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { Section08Controller } from './section08.controller';
import { Section08Service } from './section08.service';

@Module({
	imports: [UsersModule, ReportsModule],
	controllers: [Section08Controller],
	providers: [Section08Service],
})
export class Section08Module {}
