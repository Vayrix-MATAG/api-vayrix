import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class LoginDto {
  @ApiPropertyOptional({ example: 'jean@gmail.com' })
  @ValidateIf((o: LoginDto) => !o.telephone && !o.login)
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: '690000000' })
  @ValidateIf((o: LoginDto) => !o.email && !o.login)
  @IsString()
  @IsNotEmpty()
  telephone?: string;

  @ApiPropertyOptional({
    example: 'jean@gmail.com',
    description: 'Rétrocompatibilité — email ou téléphone',
  })
  @ValidateIf((o: LoginDto) => !o.email && !o.telephone)
  @IsString()
  @IsNotEmpty()
  login?: string;

  @ApiProperty({ example: 'password' })
  @IsString()
  @MinLength(8)
  password: string;
}
