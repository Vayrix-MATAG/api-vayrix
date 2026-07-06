"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiWrappedOkResponse = ApiWrappedOkResponse;
exports.ApiWrappedCreatedResponse = ApiWrappedCreatedResponse;
exports.ApiCommonErrors = ApiCommonErrors;
exports.ApiPublicErrors = ApiPublicErrors;
exports.ApiProtectedErrors = ApiProtectedErrors;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_response_dto_1 = require("../dto/api-response.dto");
function wrappedSchema(dataModel) {
    return {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(api_response_dto_1.ApiResponseDto) },
            {
                properties: {
                    data: { $ref: (0, swagger_1.getSchemaPath)(dataModel) },
                },
            },
        ],
    };
}
function ApiWrappedOkResponse(dataModel, description) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(api_response_dto_1.ApiResponseDto, dataModel), (0, swagger_1.ApiResponse)({
        status: 200,
        description: description ?? 'Succès',
        schema: wrappedSchema(dataModel),
    }));
}
function ApiWrappedCreatedResponse(dataModel, description) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(api_response_dto_1.ApiResponseDto, dataModel), (0, swagger_1.ApiResponse)({
        status: 201,
        description: description ?? 'Créé avec succès',
        schema: wrappedSchema(dataModel),
    }));
}
function ApiCommonErrors(...statuses) {
    const defaults = statuses.length
        ? statuses
        : [400, 401, 404, 409, 429, 500];
    const descriptions = {
        400: 'Requête invalide ou données incorrectes',
        401: 'Non authentifié — token JWT manquant ou invalide',
        403: 'Accès refusé — permissions insuffisantes',
        404: 'Ressource introuvable',
        409: 'Conflit — ressource déjà existante',
        429: 'Trop de requêtes — limite OTP ou rate-limit atteinte',
        500: 'Erreur interne du serveur',
    };
    return (0, common_1.applyDecorators)(...defaults.map((status) => (0, swagger_1.ApiResponse)({ status, description: descriptions[status] })));
}
function ApiPublicErrors() {
    return ApiCommonErrors(400, 404, 409, 429, 500);
}
function ApiProtectedErrors() {
    return ApiCommonErrors(400, 401, 403, 404, 409, 429, 500);
}
//# sourceMappingURL=swagger.helpers.js.map