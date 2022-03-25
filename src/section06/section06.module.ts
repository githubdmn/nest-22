import { Module } from '@nestjs/common';
import { ComputerModule } from './computer/computer.module';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';

@Module({
	imports: [ComputerModule, CpuModule, DiskModule, PowerModule],
})
export class Section06Module {}
