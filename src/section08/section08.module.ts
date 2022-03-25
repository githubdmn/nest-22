import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { Section08Controller } from './section08.controller';
import { Section08Service } from './section08.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './users/user.entity';
import Report from './reports/report.entity';

@Module({
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
	controllers: [Section08Controller],
	providers: [Section08Service],
})
export class Section08Module {}
