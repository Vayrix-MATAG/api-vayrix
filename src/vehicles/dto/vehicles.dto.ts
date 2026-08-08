import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

/**
 * DTO pour la création d'un véhicule
 */
export class CreateVehicleDto {
  @ApiProperty({ example: 'Toyota' })
  @IsString()
  marque: string;

  @ApiProperty({ example: 'Corolla' })
  @IsString()
  modele: string;

  @ApiProperty({ example: 2020 })
  @IsNumber()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  annee: number;

  @ApiProperty({ example: 'Blanc' })
  @IsString()
  couleur: string;

  @ApiProperty({ example: 'AB-123-CD' })
  @IsString()
  matricule: string;

  @ApiProperty({ example: '1' })
  @IsString()
  typeVehiculeId: string;

  @ApiPropertyOptional({ example: '1', description: 'ID du chauffeur (optionnel pour ADMIN/SUPER_ADMIN)' })
  @IsOptional()
  @IsString()
  chauffeurId?: string;
}

/**
 * DTO pour la mise à jour du statut d'un véhicule
 */
export class UpdateVehicleStatusDto {
  @ApiProperty({ example: 'DISPONIBLE' })
  @IsString()
  statut: string;
}

/**
 * DTO pour la recherche de véhicules
 */
export class VehiclesQueryDto {
  @ApiPropertyOptional({ example: 'DISPONIBLE' })
  @IsOptional()
  @IsString()
  statut?: string;

  @ApiPropertyOptional({ example: '1' })
  @IsOptional()
  @IsString()
  typeVehiculeId?: string;

  @ApiPropertyOptional({ example: 'Toyota' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ example: 'marque' })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({ example: 'asc' })
  @IsOptional()
  @IsString()
  sortOrder?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;
}
