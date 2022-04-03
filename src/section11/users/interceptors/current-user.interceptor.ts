import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export default class CurrentUserInterceptor implements NestInterceptor {
	constructor(private userService: UsersService) { }

	async intercept(
		context: ExecutionContext,
		next: CallHandler<any>,
	): Promise<Observable<any>> {
		const request = context.switchToHttp().getRequest();
		const { userId } = request.session || {};
		if (userId) request.currentUser = await this.userService.findById(userId);
		return next.handle();
	}
}
