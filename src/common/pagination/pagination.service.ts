import { Injectable } from '@nestjs/common';
import { PaginationDto } from './pagination.dto';
import { PaginationResponseDto } from './pagination-response.dto';

@Injectable()
export class PaginationService {
  buildResponse<T>(
    items: T[],
    totalItems: number,
    pagination: Pick<PaginationDto, 'page' | 'limit'>,
  ): PaginationResponseDto<T> {
    const page = Math.max(1, Number(pagination.page || 1));
    const limit = Math.max(1, Number(pagination.limit || 10));
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    return {
      items,
      meta: {
        page,
        limit,
        totalItems,
        totalPages,
        hasNext: page < totalPages,
        hasPrevious: page > 1,
      },
    };
  }
}
