import { Module } from '@nestjs/common';
import { Section09Controller } from './section09.controller';
import { Section09Service } from './section09.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { UserController } from './user/user.controller';
import { ReportController } from './report/report.controller';

@Module({
  controllers: [Section09Controller, UserController, ReportController],
  providers: [Section09Service],
  imports: [UsersModule, ReportsModule]
})
export class Section09Module {}
