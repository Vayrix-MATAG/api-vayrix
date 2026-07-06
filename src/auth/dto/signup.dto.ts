import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { SIGNUP_ROLES, type SignupRole } from '../../common/constants/roles.constant';

export class SignupDto {
  @ApiProperty({ enum: SIGNUP_ROLES, example: 'CLIENT' })
  @IsEnum(SIGNUP_ROLES)
  role: SignupRole;

  @ApiProperty({ example: 'Jean' })
  @IsString()
  @IsNotEmpty()
  nom: string;

  @ApiProperty({ example: 'Paul' })
  @IsString()
  @IsNotEmpty()
  prenom: string;

  @ApiProperty({ example: '690000000' })
  @IsString()
  @IsNotEmpty()
  telephone: string;

  @ApiProperty({ example: 'jean@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;
}
