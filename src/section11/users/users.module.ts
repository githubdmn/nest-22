import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user.entity';
import { CurrentUserInterceptor } from './interceptors';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
	controllers: [UsersController],
	// providers: [UsersService, AuthService, CurrentUserInterceptor],
	providers: [
		UsersService,
		AuthService,
		{
			provide: APP_INTERCEPTOR,
			useClass: CurrentUserInterceptor,
		},
	],
	imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule { }
