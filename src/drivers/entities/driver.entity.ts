import { ApiProperty } from '@nestjs/swagger';

export class DriverEntity {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  utilisateurId: bigint;

  @ApiProperty()
  numeroPermis: string;

  @ApiProperty()
  estEnLigne: boolean;

  @ApiProperty()
  solde: number;

  @ApiProperty()
  statut: string;

  @ApiProperty()
  motifStatut?: string;

  @ApiProperty()
  dateCreation: Date;

  @ApiProperty()
  dateModification: Date;

  @ApiProperty()
  utilisateur?: {
    id: bigint;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    photo?: string;
  };
}
