import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import UserDto from 'src/section10/users/dtos/user.dto';

export default class SerializeInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		handler: CallHandler,
	): Observable<any> | Promise<Observable<any>> {
		return handler.handle().pipe(
			map((data: any) => {
				return plainToClass(UserDto, data, {
					excludeExtraneousValues: true,
				});
			}),
		);
	}
}
