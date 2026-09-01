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
import { MailModule } from './mail/mail.module';
import { OtpModule } from './otp/otp.module';
import { SmsModule } from './sms/sms.module';
import { DriversModule } from './drivers/drivers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { RidesModule } from './rides/rides.module';
// Modules métier à activer progressivement
// import { PaymentsModule } from './payments/payments.module';
// import { NotificationsModule } from './notifications/notifications.module';
// import { UploadsModule } from './uploads/uploads.module';
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
    MailModule,
    OtpModule,
    SmsModule,
    AuthModule,
    UsersModule,
    RoleModule,
    DriversModule,
    VehiclesModule,
    RidesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
