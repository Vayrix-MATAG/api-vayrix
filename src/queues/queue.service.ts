import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('notifications') private readonly notificationsQueue: Queue) {}
  async enqueueNotification(userId: string, title: string): Promise<void> { await this.notificationsQueue.add('push-notification', { userId, title }); }
}
