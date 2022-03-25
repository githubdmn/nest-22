import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export default class SerializeInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		handler: CallHandler,
	): Observable<any> | Promise<Observable<any>> {
		console.log('Before handler: ', context);
		return handler.handle().pipe(
			map((data: any) => {
				console.log('Before the response in sent out: ', data);
				// plainToClass
			}),
		);
	}
}
