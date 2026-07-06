import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { ApiResponseDto } from '../dto/api-response.dto';

/** Schéma Swagger d'une réponse API enveloppée { success, message, data, timestamp } */
function wrappedSchema(dataModel: Type<unknown>) {
  return {
    allOf: [
      { $ref: getSchemaPath(ApiResponseDto) },
      {
        properties: {
          data: { $ref: getSchemaPath(dataModel) },
        },
      },
    ],
  };
}

/** Documente une réponse 200 enveloppée par TransformInterceptor */
export function ApiWrappedOkResponse(
  dataModel: Type<unknown>,
  description?: string,
) {
  return applyDecorators(
    ApiExtraModels(ApiResponseDto, dataModel),
    ApiResponse({
      status: 200,
      description: description ?? 'Succès',
      schema: wrappedSchema(dataModel),
    }),
  );
}

/** Documente une réponse 201 enveloppée */
export function ApiWrappedCreatedResponse(
  dataModel: Type<unknown>,
  description?: string,
) {
  return applyDecorators(
    ApiExtraModels(ApiResponseDto, dataModel),
    ApiResponse({
      status: 201,
      description: description ?? 'Créé avec succès',
      schema: wrappedSchema(dataModel),
    }),
  );
}

/** Erreurs HTTP courantes documentées dans Swagger */
export function ApiCommonErrors(
  ...statuses: Array<400 | 401 | 403 | 404 | 409 | 429 | 500>
) {
  const defaults: Array<400 | 401 | 403 | 404 | 409 | 429 | 500> = statuses.length
    ? statuses
    : [400, 401, 404, 409, 429, 500];

  const descriptions: Record<number, string> = {
    400: 'Requête invalide ou données incorrectes',
    401: 'Non authentifié — token JWT manquant ou invalide',
    403: 'Accès refusé — permissions insuffisantes',
    404: 'Ressource introuvable',
    409: 'Conflit — ressource déjà existante',
    429: 'Trop de requêtes — limite OTP ou rate-limit atteinte',
    500: 'Erreur interne du serveur',
  };

  return applyDecorators(
    ...defaults.map((status) =>
      ApiResponse({ status, description: descriptions[status] }),
    ),
  );
}

/** Erreurs pour endpoints publics (sans 401) */
export function ApiPublicErrors() {
  return ApiCommonErrors(400, 404, 409, 429, 500);
}

/** Erreurs pour endpoints protégés JWT */
export function ApiProtectedErrors() {
  return ApiCommonErrors(400, 401, 403, 404, 409, 429, 500);
}
