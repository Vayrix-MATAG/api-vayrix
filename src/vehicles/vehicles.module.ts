import { Module } from '@nestjs/common';
import { DriversModule } from '../drivers/drivers.module';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { VehiclesRepository } from './repositories/vehicles.repository';

@Module({ imports: [DriversModule], controllers: [VehiclesController], providers: [VehiclesService, VehiclesRepository], exports: [VehiclesService, VehiclesRepository] })
export class VehiclesModule {}
