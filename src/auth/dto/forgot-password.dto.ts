import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ForgotPasswordDto {
  @ApiProperty({ example: '690000000' })
  @IsString()
  @IsNotEmpty()
  telephone: string;
}
