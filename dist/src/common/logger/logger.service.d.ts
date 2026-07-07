import { Logger } from '@nestjs/common';
export declare class LoggerService extends Logger {
    logError(context: string, error: unknown): void;
}
