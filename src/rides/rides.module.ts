import { Module, forwardRef } from '@nestjs/common';
import { DriversModule } from '../drivers/drivers.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { PaymentsModule } from '../payments/payments.module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';
import { RidesRepository } from './repositories/rides.repository';

@Module({ imports: [DriversModule, VehiclesModule, forwardRef(() => PaymentsModule), forwardRef(() => NotificationsModule)], controllers: [RidesController], providers: [RidesService, RidesRepository], exports: [RidesService, RidesRepository] })
export class RidesModule {}
