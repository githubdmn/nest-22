import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { Section08Controller } from './section08.controller';
import { Section08Service } from './section08.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		UsersModule,
		ReportsModule,
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'nest.section08',
			entities: [],
			synchronize: true,
		}),
	],
	controllers: [Section08Controller],
	providers: [Section08Service],
})
export class Section08Module {}
