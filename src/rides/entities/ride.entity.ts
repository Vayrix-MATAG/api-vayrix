import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod, RideStatus } from '@prisma/client';

export class RideEntity {
  @ApiProperty() id: string;
  @ApiProperty() passengerId: string;
  @ApiProperty({ required: false }) driverId?: string | null;
  @ApiProperty({ enum: RideStatus }) status: RideStatus;
  @ApiProperty() pickupAddress: string;
  @ApiProperty() dropoffAddress: string;
  @ApiProperty() estimatedFare: string;
  @ApiProperty({ required: false }) finalFare?: string | null;
  @ApiProperty() requestedAt: Date;
}

export class FareEstimateEntity {
  @ApiProperty() estimatedFare: number;
  @ApiProperty() distanceKm: number;
  @ApiProperty() estimatedDurationMin: number;
  @ApiProperty({ enum: PaymentMethod, required: false }) paymentMethod?: PaymentMethod;
}
