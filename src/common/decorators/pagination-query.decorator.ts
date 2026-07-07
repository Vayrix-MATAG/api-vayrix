import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { PaginationDto } from '../pagination/pagination.dto';

export const PaginationQuery = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): PaginationDto => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const query = request.query as Record<string, string | undefined>;

    return {
      page: query.page ? Number(query.page) : 1,
      limit: query.limit ? Number(query.limit) : 10,
      search: query.search,
      sortBy: query.sortBy,
      sortOrder:
        query.sortOrder === 'asc' || query.sortOrder === 'desc'
          ? query.sortOrder
          : 'desc',
    };
  },
);
