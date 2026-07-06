import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

@Processor('notifications')
export class NotificationsProcessor extends WorkerHost {
  private readonly logger = new Logger(NotificationsProcessor.name);
  async process(job: Job<{ userId: string; title: string }>): Promise<void> {
    this.logger.log(`Traitement job notification ${job.id} pour ${job.data.userId}: ${job.data.title}`);
  }
}
