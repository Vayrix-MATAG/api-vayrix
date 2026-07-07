import { RoleEntity } from '../entities/role.entity';
import { RoleModel } from '../interfaces/role.interface';
export declare class RoleMapper {
    static toEntity(role: RoleModel): RoleEntity;
    static toEntities(roles: RoleModel[]): RoleEntity[];
}
