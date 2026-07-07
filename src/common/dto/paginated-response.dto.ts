import { ApiProperty } from '@nestjs/swagger';

/** Réponse paginée standardisée */
export class PaginatedResponseDto<T> {
  @ApiProperty({ isArray: true })
  items: T[];

  @ApiProperty({
    example: {
      page: 1,
      limit: 10,
      totalItems: 150,
      totalPages: 15,
      hasNext: true,
      hasPrevious: false,
    },
  })
  meta: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };

  /** @deprecated Compatibilité ancien format */
  @ApiProperty()
  data: T[];

  /** @deprecated Compatibilité ancien format */
  @ApiProperty()
  total: number;

  /** @deprecated Compatibilité ancien format */
  @ApiProperty()
  page: number;

  /** @deprecated Compatibilité ancien format */
  @ApiProperty()
  limit: number;

  /** @deprecated Compatibilité ancien format */
  @ApiProperty()
  totalPages: number;

  /** @deprecated Compatibilité ancien format */
  @ApiProperty()
  hasNextPage: boolean;

  /** @deprecated Compatibilité ancien format */
  @ApiProperty()
  hasPreviousPage: boolean;

  constructor(data: T[], total: number, page: number, limit: number) {
    const totalPages = Math.ceil(total / limit) || 1;
    this.items = data;
    this.meta = {
      page,
      limit,
      totalItems: total,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };

    // Compatibilité ancien format
    this.data = data;
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.totalPages = totalPages;
    this.hasNextPage = page < totalPages;
    this.hasPreviousPage = page > 1;
  }
}
