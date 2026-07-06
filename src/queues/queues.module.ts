import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { NotificationsProcessor } from './notifications.processor';
import { QueueService } from './queue.service';

@Module({ imports: [BullModule.registerQueue({ name: 'notifications' })], providers: [NotificationsProcessor, QueueService], exports: [QueueService] })
export class QueuesModule {}
