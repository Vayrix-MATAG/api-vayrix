import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  logError(context: string, error: unknown): void {
    const stack = error instanceof Error ? error.stack : String(error);
    this.error(context, stack);
  }
}
