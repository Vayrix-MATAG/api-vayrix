"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMapper = void 0;
class RoleMapper {
    static toEntity(role) {
        return {
            id: role.id.toString(),
            nom: role.nom,
            description: role.description,
        };
    }
    static toEntities(roles) {
        return roles.map((role) => RoleMapper.toEntity(role));
    }
}
exports.RoleMapper = RoleMapper;
//# sourceMappingURL=role.mapper.js.map