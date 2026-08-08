import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { CourseType } from '../interfaces/ride-status.interface';

/**
 * DTO pour la création d'une course
 */
export class CreateRideDto {
  @ApiProperty({ example: '123 Rue de Paris, Douala' })
  @IsString()
  adresseDepart: string;

  @ApiProperty({ example: 4.0483 })
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitudeDepart: number;

  @ApiProperty({ example: 9.7043 })
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitudeDepart: number;

  @ApiProperty({ example: '45 Avenue du General, Douala' })
  @IsString()
  adresseArrivee: string;

  @ApiProperty({ example: 4.0583 })
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitudeArrivee: number;

  @ApiProperty({ example: 9.7143 })
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitudeArrivee: number;

  @ApiProperty({ example: '1' })
  @IsString()
  typeVehiculeId: string;

  @ApiProperty({ enum: CourseType, example: CourseType.STANDARD })
  @IsEnum(CourseType)
  typeCourse: CourseType;
}

/**
 * DTO pour l'estimation de tarif
 */
export class EstimateRideDto {
  @ApiProperty({ example: 4.0483 })
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitudeDepart: number;

  @ApiProperty({ example: 9.7043 })
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitudeDepart: number;

  @ApiProperty({ example: 4.0583 })
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitudeArrivee: number;

  @ApiProperty({ example: 9.7143 })
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitudeArrivee: number;

  @ApiProperty({ example: '1' })
  @IsString()
  typeVehiculeId: string;
}

/**
 * DTO pour l'acceptation d'une course par un chauffeur
 */
export class AcceptRideDto {
  @ApiProperty({ example: '1' })
  @IsString()
  vehiculeId: string;
}

/**
 * DTO pour la mise à jour du statut d'une course
 */
export class UpdateRideStatusDto {
  @ApiProperty({ example: 'EN_COURS' })
  @IsString()
  statut: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  motif?: string;
}

/**
 * DTO pour l'annulation d'une course
 */
export class CancelRideDto {
  @ApiProperty({ example: 'Client a annulé' })
  @IsString()
  motif: string;
}

/**
 * DTO pour la recherche de courses
 */
export class RidesQueryDto {
  @ApiPropertyOptional({ example: 'EN_COURS' })
  @IsOptional()
  @IsString()
  statut?: string;

  @ApiPropertyOptional({ example: 'STANDARD' })
  @IsOptional()
  @IsString()
  typeCourse?: string;

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
