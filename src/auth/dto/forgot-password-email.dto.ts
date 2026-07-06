import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ForgotPasswordEmailDto {
  @ApiProperty({ example: 'jean@gmail.com' })
  @IsEmail()
  email: string;
}
