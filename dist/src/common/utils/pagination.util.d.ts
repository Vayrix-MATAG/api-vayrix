import { Prisma } from '../../../generated/prisma/client';
import { PaginatedResult, PaginationOptions } from '../interfaces/pagination.interface';
export declare function getPaginationParams(options: PaginationOptions): {
    skip: number;
    take: number;
    orderBy: Record<string, 'asc' | 'desc'>;
};
export declare function buildPaginatedResult<T>(data: T[], total: number, page: number, limit: number): PaginatedResult<T>;
export declare function buildSearchFilter(search: string | undefined, fields: string[]): Prisma.StringFilter | undefined;
export declare function buildSearchOr(search: string | undefined, fields: string[]): Record<string, Prisma.StringFilter>[] | undefined;
