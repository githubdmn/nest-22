import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
	constructor(private powerService: PowerService) {}

	getData() {
		const watts = 20;
		const message = `Uses ${watts} watts of power`;
		console.log(message);
		this.powerService.supplyPower(watts);
		return 'DATA!';
	}
}
