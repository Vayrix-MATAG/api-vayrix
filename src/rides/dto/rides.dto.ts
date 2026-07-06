import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentMethod, RideStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDateString, IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { SearchPaginationQueryDto } from '../../common/dto/search-pagination-query.dto';

export class CreateRideDto {
  @ApiProperty() @Type(() => Number) @Min(-90) @Max(90) pickupLat: number;
  @ApiProperty() @Type(() => Number) @Min(-180) @Max(180) pickupLng: number;
  @ApiProperty() @IsString() pickupAddress: string;
  @ApiProperty() @Type(() => Number) @Min(-90) @Max(90) dropoffLat: number;
  @ApiProperty() @Type(() => Number) @Min(-180) @Max(180) dropoffLng: number;
  @ApiProperty() @IsString() dropoffAddress: string;
  @ApiPropertyOptional({ enum: PaymentMethod }) @IsOptional() @IsEnum(PaymentMethod) paymentMethod?: PaymentMethod;
}

export class RideActionDto {
  @ApiPropertyOptional() @IsOptional() @IsString() reason?: string;
}

export class UpdateRideStatusDto {
  @ApiProperty({ enum: RideStatus }) @IsEnum(RideStatus) status: RideStatus;
  @ApiPropertyOptional() @IsOptional() @IsDateString() completedAt?: string;
  @ApiPropertyOptional() @IsOptional() @IsInt() durationMin?: number;
}

export class RidesQueryDto extends SearchPaginationQueryDto {
  @ApiPropertyOptional({ enum: RideStatus }) @IsOptional() @IsEnum(RideStatus) status?: RideStatus;
}
