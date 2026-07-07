import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import configuration from './config/configuration';
import { CommonModule } from './common/common.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RoleModule } from './modules/role/role.module';
// Modules métier désactivés temporairement — migration schéma Prisma en cours
// import { DriversModule } from './drivers/drivers.module';
// import { VehiclesModule } from './vehicles/vehicles.module';
// import { PaymentsModule } from './payments/payments.module';
// import { NotificationsModule } from './notifications/notifications.module';
// import { UploadsModule } from './uploads/uploads.module';
// import { RidesModule } from './rides/rides.module';
// import { SosModule } from './sos/sos.module';
// import { SharingModule } from './sharing/sharing.module';
// import { RealtimeModule } from './realtime/realtime.module';
// import { QueuesModule } from './queues/queues.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    ThrottlerModule.forRootAsync({ inject: [ConfigService], useFactory: (configService: ConfigService) => [{ ttl: configService.get<number>('throttle.ttl') ?? 60000, limit: configService.get<number>('throttle.limit') ?? 100 }] }),
    CommonModule,
    PrismaModule,
    AuthModule,
    UsersModule,
    RoleModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
