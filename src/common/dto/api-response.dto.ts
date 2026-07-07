import { ApiProperty } from '@nestjs/swagger';

/** Enveloppe de réponse API standard (TransformInterceptor) */
export class ApiResponseDto<T = unknown> {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Succès' })
  message: string;

  @ApiProperty({ required: false })
  data?: T;

  @ApiProperty({ required: false, nullable: true, example: null })
  meta?: unknown | null;

  @ApiProperty({ required: false, type: [Object], example: [] })
  errors?: unknown[];

  @ApiProperty({ example: '2026-07-06T19:00:00.000Z' })
  timestamp: string;

  constructor(
    data: T,
    message = 'Succès',
    success = true,
    meta: unknown | null = null,
  ) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.meta = meta;
    this.errors = success ? undefined : [];
    this.timestamp = new Date().toISOString();
  }
}

/** Schéma Swagger pour les erreurs API */
export class ApiErrorResponseDto {
  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: 'Requête invalide' })
  message: string | string[];

  @ApiProperty({ example: '2026-07-06T19:00:00.000Z' })
  timestamp: string;
}
