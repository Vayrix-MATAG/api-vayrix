import { Module, forwardRef } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { NotificationsRepository } from './repositories/notifications.repository';

@Module({ imports: [], controllers: [NotificationsController], providers: [NotificationsService, NotificationsRepository], exports: [NotificationsService, NotificationsRepository] })
export class NotificationsModule {}
