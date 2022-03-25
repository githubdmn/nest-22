import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
	constructor(private powerService: PowerService) {}

	compute(a: number, b: number) {
		const watts = 10;
		const message = `Consuming ${watts} watts of power`;
		console.log(message);
		this.powerService.supplyPower(watts);
		return a + b;
	}
}
