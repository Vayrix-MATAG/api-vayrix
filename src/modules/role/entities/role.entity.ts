import { ApiProperty } from '@nestjs/swagger';

export class RoleEntity {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'CLIENT' })
  nom: string;

  @ApiProperty({ example: 'Client de la plateforme' })
  description: string;
}
