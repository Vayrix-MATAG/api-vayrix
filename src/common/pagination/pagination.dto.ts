import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import {
  PAGINATION_DEFAULTS,
  SORT_ORDERS,
} from '../constants/pagination.constants';

export class PaginationDto {
  @ApiPropertyOptional({
    default: PAGINATION_DEFAULTS.PAGE,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = PAGINATION_DEFAULTS.PAGE;

  @ApiPropertyOptional({
    default: PAGINATION_DEFAULTS.LIMIT,
    minimum: 1,
    maximum: PAGINATION_DEFAULTS.MAX_LIMIT,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(PAGINATION_DEFAULTS.MAX_LIMIT)
  limit = PAGINATION_DEFAULTS.LIMIT;

  @ApiPropertyOptional({
    description: 'Recherche textuelle globale',
    example: 'nengue',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    description: 'Champ de tri',
    example: 'dateCreation',
  })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({
    enum: SORT_ORDERS,
    default: PAGINATION_DEFAULTS.SORT_ORDER,
  })
  @IsOptional()
  @IsIn(SORT_ORDERS)
  sortOrder: (typeof SORT_ORDERS)[number] = PAGINATION_DEFAULTS.SORT_ORDER;
}
