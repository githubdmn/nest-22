import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { AuthService } from './users/auth';

@Module({
	controllers: [],
	providers: [],
	imports: [UsersModule, ReportsModule, AuthService],
})
export class Section11Module {}
