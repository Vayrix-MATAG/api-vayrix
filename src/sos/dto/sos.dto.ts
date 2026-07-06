import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateSosDto {
  @ApiPropertyOptional() @IsOptional() @IsString() message?: string;
}
