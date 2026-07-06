import { Prisma } from '../../../generated/prisma/client';
import { PaginatedResult, PaginationOptions } from '../interfaces/pagination.interface';

/** Calcule skip/take Prisma à partir des options de pagination */
export function getPaginationParams(options: PaginationOptions): {
  skip: number;
  take: number;
  orderBy: Record<string, 'asc' | 'desc'>;
} {
  const page = options.page > 0 ? options.page : 1;
  const limit = options.limit > 0 ? options.limit : 10;
  const sortBy = options.sortBy ?? 'createdAt';
  const sortOrder = options.sortOrder ?? 'desc';

  return {
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { [sortBy]: sortOrder },
  };
}

/** Construit un résultat paginé typé */
export function buildPaginatedResult<T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
): PaginatedResult<T> {
  return { data, total, page, limit };
}

/** Recherche OR sur plusieurs champs string */
export function buildSearchFilter(
  search: string | undefined,
  fields: string[],
): Prisma.StringFilter | undefined {
  if (!search?.trim()) {
    return undefined;
  }

  return { contains: search.trim(), mode: 'insensitive' };
}

/** Construit un OR de recherche pour Prisma */
export function buildSearchOr(
  search: string | undefined,
  fields: string[],
): Record<string, Prisma.StringFilter>[] | undefined {
  if (!search?.trim()) {
    return undefined;
  }

  const filter = buildSearchFilter(search, fields);
  if (!filter) {
    return undefined;
  }

  return fields.map((field) => ({ [field]: filter }));
}
