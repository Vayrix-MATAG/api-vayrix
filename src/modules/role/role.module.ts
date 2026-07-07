import { Module } from '@nestjs/common';
import { RoleController } from './controllers/role.controller';
import { RoleService } from './services/role.service';
import { RoleRepository } from './repositories/role.repository';
import { RolesGuard } from '../../common/guards/roles.guard';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RoleRepository, RolesGuard],
  exports: [RoleService, RoleRepository],
})
export class RoleModule {}
