import { ApiProperty } from '@nestjs/swagger';

/** Réponse simple avec message */
export class MessageResponseEntity {
  @ApiProperty({ example: 'Opération réussie' })
  message: string;
}
