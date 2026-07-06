import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { DriversRepository } from './repositories/drivers.repository';

@Module({
  imports: [UsersModule],
  controllers: [DriversController],
  providers: [DriversService, DriversRepository],
  exports: [DriversService, DriversRepository],
})
export class DriversModule {}
