import {
	CallHandler,
	ExecutionContext,
	NestInterceptor,
	UseInterceptors,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Any class/object type
interface ClasConstructor {
	// eslint-disable-next-line @typescript-eslint/ban-types
	new (...args: any[]): {};
}
export function Serialize(dto: ClasConstructor) {
	return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
	constructor(private dto: any) {}
	intercept(
		context: ExecutionContext,
		handler: CallHandler,
	): Observable<any> | Promise<Observable<any>> {
		return handler.handle().pipe(
			map((data: any) => {
				return plainToClass(this.dto, data, {
					excludeExtraneousValues: true,
				});
			}),
		);
	}
}
