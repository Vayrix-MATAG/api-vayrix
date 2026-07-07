import { RoleEntity } from '../entities/role.entity';
import { RoleModel } from '../interfaces/role.interface';

export class RoleMapper {
  static toEntity(role: RoleModel): RoleEntity {
    return {
      id: role.id.toString(),
      nom: role.nom,
      description: role.description,
    };
  }

  static toEntities(roles: RoleModel[]): RoleEntity[] {
    return roles.map((role) => RoleMapper.toEntity(role));
  }
}
