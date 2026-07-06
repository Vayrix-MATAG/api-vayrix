import { Module } from '@nestjs/common';
import { RidesModule } from '../rides/rides.module';
import { SosController } from './sos.controller';
import { SosService } from './sos.service';
import { SosRepository } from './repositories/sos.repository';

@Module({ imports: [RidesModule], controllers: [SosController], providers: [SosService, SosRepository] })
export class SosModule {}
