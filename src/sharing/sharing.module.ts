import { Module } from '@nestjs/common';
import { RidesModule } from '../rides/rides.module';
import { SharingController } from './sharing.controller';
import { SharingService } from './sharing.service';

@Module({ imports: [RidesModule], controllers: [SharingController], providers: [SharingService] })
export class SharingModule {}
