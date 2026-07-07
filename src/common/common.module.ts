import { Global, Module } from '@nestjs/common';
import { ApiResponseService } from './responses/api-response.service';
import { PaginationService } from './pagination/pagination.service';
import { LoggerService } from './logger/logger.service';

/** Module commun global pour les providers partagés */
@Global()
@Module({
  providers: [ApiResponseService, PaginationService, LoggerService],
  exports: [ApiResponseService, PaginationService, LoggerService],
})
export class CommonModule {}
