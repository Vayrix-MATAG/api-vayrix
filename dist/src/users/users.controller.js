"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users.dto");
const user_entity_1 = require("./entities/user.entity");
const message_response_entity_1 = require("../common/entities/message-response.entity");
const swagger_helpers_1 = require("../common/swagger/swagger.helpers");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    getMe(user) {
        return this.usersService.findOne(user.id);
    }
    updateMe(user, dto) {
        return this.usersService.update(user.id, dto);
    }
    updatePhoto(user, dto) {
        return this.usersService.updatePhoto(user.id, dto);
    }
    updateLangue(user, dto) {
        return this.usersService.updateLangue(user.id, dto);
    }
    updateTelephone(user, dto) {
        return this.usersService.updateTelephone(user.id, dto);
    }
    removeMe(user) {
        return this.usersService.remove(user.id);
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Mon profil' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(user_entity_1.UserEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour mon profil (nom, prénom)' }),
    (0, swagger_1.ApiBody)({ type: users_dto_1.UpdateUserDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(user_entity_1.UserEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateMe", null);
__decorate([
    (0, common_1.Patch)('photo'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour ma photo de profil' }),
    (0, swagger_1.ApiBody)({ type: users_dto_1.UpdateUserPhotoDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(user_entity_1.UserEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.UpdateUserPhotoDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatePhoto", null);
__decorate([
    (0, common_1.Patch)('langue'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour ma langue' }),
    (0, swagger_1.ApiBody)({ type: users_dto_1.UpdateUserLangueDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(user_entity_1.UserEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.UpdateUserLangueDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateLangue", null);
__decorate([
    (0, common_1.Patch)('telephone'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour mon numéro de téléphone' }),
    (0, swagger_1.ApiBody)({ type: users_dto_1.UpdateUserTelephoneDto }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(user_entity_1.UserEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, users_dto_1.UpdateUserTelephoneDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateTelephone", null);
__decorate([
    (0, common_1.Delete)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer mon compte' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(message_response_entity_1.MessageResponseEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeMe", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Détail d\'un utilisateur par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID utilisateur', example: '1' }),
    (0, swagger_helpers_1.ApiWrappedOkResponse)(user_entity_1.UserEntity),
    (0, swagger_helpers_1.ApiProtectedErrors)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map