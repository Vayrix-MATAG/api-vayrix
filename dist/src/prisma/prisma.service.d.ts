import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../../generated/prisma/client';
import { LoggerService } from '../common/logger/logger.service';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger;
    private readonly pool;
    constructor(configService: ConfigService, logger: LoggerService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    enableShutdownHooks(): Promise<void>;
    withTransaction<T>(fn: (tx: Omit<this, '$connect' | '$disconnect' | '$on' | '$transaction'>) => Promise<T>): Promise<T>;
}
