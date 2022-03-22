import { Module } from '@nestjs/common';
import { Section06Module } from './section06/section06.module';
import { Section07Module } from './section07/section07.module';
import { UsersController } from './service07/users/users/users.controller';
import { ReportsController } from './service07/reports/reports/reports.controller';
import { UsersService } from './service07/users/users/users.service';
import { ReportsService } from './service07/reports/reports/reports.service';

@Module({
	imports: [Section06Module, Section07Module],
	controllers: [UsersController, ReportsController],
	providers: [UsersService, ReportsService],
})
export class AppModule {}
