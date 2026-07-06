import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AuthTokensEntity {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken: string;

  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  refreshToken: string;

  @ApiProperty({ example: '15m' })
  expiresIn: string;
}

export class AuthUserEntity {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'Diop' })
  nom: string;

  @ApiProperty({ example: 'Awa' })
  prenom: string;

  @ApiProperty({ example: '+221770000002' })
  telephone: string;

  @ApiProperty({ example: 'client@vayrix.com' })
  email: string;

  @ApiProperty({ type: [String], example: ['CLIENT'] })
  roles: string[];

  @ApiPropertyOptional({ example: 'storage/photos/client.jpg' })
  photo?: string | null;

  @ApiProperty({ example: 'fr' })
  langue: string;

  @ApiPropertyOptional({ example: '2026-07-06T18:00:00.000Z' })
  derniereConnexion?: Date | null;
}

export class AuthResponseEntity extends AuthTokensEntity {
  @ApiProperty({ type: AuthUserEntity })
  utilisateur: AuthUserEntity;
}
