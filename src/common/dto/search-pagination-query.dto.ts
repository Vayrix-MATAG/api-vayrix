import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from './pagination-query.dto';

/** DTO combinant pagination, recherche et tri */
export class SearchPaginationQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ description: 'Terme de recherche textuelle' })
  @IsOptional()
  @IsString()
  search?: string;
}
