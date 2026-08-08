import { Module } from '@nestjs/common';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';
import { RidesRepository } from './repositories/rides.repository';
import { TarificationService } from './services/tarification.service';
import { DistanceService } from './services/distance.service';
import { CourseStateMachine } from './services/course-state-machine.service';
import { DriverMatchingService } from './services/driver-matching.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { DriversModule } from '../drivers/drivers.module';

@Module({
  imports: [PrismaModule, UsersModule, DriversModule],
  controllers: [RidesController],
  providers: [
    RidesService,
    RidesRepository,
    TarificationService,
    DistanceService,
    CourseStateMachine,
    DriverMatchingService,
  ],
  exports: [RidesService, RidesRepository],
})
export class RidesModule {}
