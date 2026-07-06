import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/** Alias explicite pour l'envoi OTP téléphone */
export class SendPhoneOtpDto {
  @ApiProperty({ example: '690000000' })
  @IsString()
  @IsNotEmpty()
  telephone: string;
}
