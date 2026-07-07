import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../../generated/prisma/client';
import { LoggerService } from '../common/logger/logger.service';

/** Service Prisma singleton avec pool PostgreSQL (Prisma 7) */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly pool: Pool;

  constructor(
    configService: ConfigService,
    private readonly logger: LoggerService,
  ) {
    const connectionString = configService.getOrThrow<string>('database.url');
    const pool = new Pool({
      connectionString,
      max: configService.get<number>('database.poolMax') ?? 10,
    });
    const adapter = new PrismaPg(pool);

    super({ adapter });
    this.pool = pool;
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log('Connexion Prisma initialisée', PrismaService.name);
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
    await this.pool.end();
    this.logger.log('Connexion Prisma fermée', PrismaService.name);
  }

  async enableShutdownHooks(): Promise<void> {
    process.on('beforeExit', async () => {
      await this.onModuleDestroy();
    });
  }

  /**
   * Point d'extension central pour les transactions applicatives.
   */
  withTransaction<T>(
    fn: (tx: Omit<this, '$connect' | '$disconnect' | '$on' | '$transaction'>) => Promise<T>,
  ): Promise<T> {
    return this.$transaction((tx) =>
      fn(tx as Omit<this, '$connect' | '$disconnect' | '$on' | '$transaction'>),
    );
  }
}
