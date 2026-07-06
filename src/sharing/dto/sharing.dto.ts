import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';

export class CreateRideShareDto {
  @ApiPropertyOptional() @IsOptional() @IsInt() @Min(1) expiresInHours?: number;
}
