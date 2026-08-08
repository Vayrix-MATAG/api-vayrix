import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { SearchPaginationQueryDto } from '../../common/dto/search-pagination-query.dto';

export class UpdateDriverProfileDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nom?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  prenom?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  telephone?: string;
}

export class UpdateDriverOnlineDto {
  @ApiProperty()
  @IsBoolean()
  estEnLigne: boolean;
}

export class UpdateDriverStatusDto {
  @ApiProperty()
  @IsString()
  statut: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  motifStatut?: string;
}

export class DriversQueryDto extends SearchPaginationQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  statut?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  estEnLigne?: boolean;
}
