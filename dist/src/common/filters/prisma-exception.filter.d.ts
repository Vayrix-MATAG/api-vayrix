import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Prisma } from '../../../generated/prisma/client';
import { LoggerService } from '../logger/logger.service';
export declare class PrismaExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: LoggerService);
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
