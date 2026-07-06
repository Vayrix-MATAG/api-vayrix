import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'Jean' })
  @IsOptional()
  @IsString()
  nom?: string;

  @ApiPropertyOptional({ example: 'Paul' })
  @IsOptional()
  @IsString()
  prenom?: string;
}

export class UpdateUserPhotoDto {
  @ApiProperty({ example: 'storage/photos/user.jpg' })
  @IsString()
  @IsNotEmpty()
  photo: string;
}

export class UpdateUserLangueDto {
  @ApiProperty({ example: 'fr' })
  @IsString()
  @IsNotEmpty()
  langue: string;
}

export class UpdateUserTelephoneDto {
  @ApiProperty({ example: '690000000' })
  @IsString()
  @IsNotEmpty()
  telephone: string;
}
