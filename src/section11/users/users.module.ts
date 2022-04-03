import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user.entity';
import { CurrentUserInterceptor } from './interceptors';

@Module({
	controllers: [UsersController],
	providers: [UsersService, AuthService, CurrentUserInterceptor],
	imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule { }
