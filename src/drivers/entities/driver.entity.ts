import { ApiProperty } from '@nestjs/swagger';
import { DriverStatus } from '@prisma/client';

export class DriverEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty({ enum: DriverStatus })
  status: DriverStatus;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  totalRides: number;

  @ApiProperty()
  licenseNumber: string;

  @ApiProperty()
  licenseExpiry: Date;

  @ApiProperty()
  isApproved: boolean;

  @ApiProperty()
  createdAt: Date;
}
