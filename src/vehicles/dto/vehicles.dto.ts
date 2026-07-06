import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { VehicleStatus, VehicleType } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { SearchPaginationQueryDto } from '../../common/dto/search-pagination-query.dto';

export class CreateVehicleDto {
  @ApiProperty() @IsString() brand: string;
  @ApiProperty() @IsString() model: string;
  @ApiProperty() @IsInt() @Min(1990) @Max(2100) year: number;
  @ApiProperty() @IsString() color: string;
  @ApiProperty() @IsString() plateNumber: string;
  @ApiProperty({ enum: VehicleType }) @IsEnum(VehicleType) type: VehicleType;
  @ApiPropertyOptional() @IsOptional() @IsInt() @Min(1) @Max(20) seats?: number;
}

export class VehiclesQueryDto extends SearchPaginationQueryDto {
  @ApiPropertyOptional({ enum: VehicleStatus }) @IsOptional() @IsEnum(VehicleStatus) status?: VehicleStatus;
  @ApiPropertyOptional({ enum: VehicleType }) @IsOptional() @IsEnum(VehicleType) type?: VehicleType;
}

export class UpdateVehicleStatusDto {
  @ApiProperty({ enum: VehicleStatus }) @IsEnum(VehicleStatus) status: VehicleStatus;
}
