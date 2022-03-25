import { Module } from '@nestjs/common';
import { Section09Controller } from './section09.controller';
import { Section09Service } from './section09.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './users/user.entity';
import Report from './reports/report.entity';

@Module({
	controllers: [Section09Controller],
	providers: [Section09Service],
	imports: [
		UsersModule,
		ReportsModule,
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'db.sqlite',
			entities: [User, Report],
			synchronize: true,
		}),
	],
})
export class Section09Module {}
