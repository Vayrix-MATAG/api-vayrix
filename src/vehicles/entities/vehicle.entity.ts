import { ApiProperty } from '@nestjs/swagger';
import { VehicleStatus, VehicleType } from '@prisma/client';

export class VehicleEntity {
  @ApiProperty() id: string;
  @ApiProperty() driverId: string;
  @ApiProperty() brand: string;
  @ApiProperty() model: string;
  @ApiProperty() year: number;
  @ApiProperty() color: string;
  @ApiProperty() plateNumber: string;
  @ApiProperty({ enum: VehicleType }) type: VehicleType;
  @ApiProperty({ enum: VehicleStatus }) status: VehicleStatus;
  @ApiProperty() seats: number;
}
