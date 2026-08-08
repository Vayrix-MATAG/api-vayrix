import { ApiProperty } from '@nestjs/swagger';

export class VehicleEntity {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  chauffeurId: bigint;

  @ApiProperty()
  typeVehiculeId: bigint;

  @ApiProperty()
  marque: string;

  @ApiProperty()
  modele: string;

  @ApiProperty()
  couleur: string;

  @ApiProperty()
  matricule: string;

  @ApiProperty()
  annee: number;

  @ApiProperty()
  statut: string;

  @ApiProperty()
  typeVehicule?: {
    id: bigint;
    nom: string;
    prixBase: number;
    prixParKm: number;
  };
}
