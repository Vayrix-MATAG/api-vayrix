import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/** Entité utilisateur exposée via l'API (sans données sensibles) */
export class UserEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  nom: string;

  @ApiProperty()
  prenom: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: [String] })
  roles: string[];

  @ApiPropertyOptional()
  photo?: string | null;

  @ApiProperty()
  langue: string;

  @ApiPropertyOptional()
  statutProfil?: string | null;

  @ApiPropertyOptional()
  derniereConnexion?: Date | null;

  @ApiProperty()
  dateCreation: Date;

  @ApiProperty()
  dateModification: Date;
}
