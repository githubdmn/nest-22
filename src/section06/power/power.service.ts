import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
	supplyPower(watts: number): void {
		const message = `Supplying on demanad watts ${watts}`;
		console.log(message);
	}
}
