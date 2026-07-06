import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendEmailOtpDto {
  @ApiProperty({ example: 'jean@gmail.com' })
  @IsEmail()
  email: string;
}
