import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { APP_ROLES } from '../constants/roles.constants';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { AuthenticatedUser } from '../interfaces/authenticated-user.interface';

/** Guard de contrôle d'accès par rôle */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest<{ user: AuthenticatedUser }>();
    const user = request.user;

    if (!user?.roles?.length) {
      throw new ForbiddenException('Accès refusé : authentification requise');
    }

    // SUPER_ADMIN possède tous les droits (bypass RBAC)
    if (user.roles.includes(APP_ROLES.SUPER_ADMIN)) {
      return true;
    }

    // Vérification normale : l'utilisateur doit avoir au moins un rôle requis
    const hasRole = requiredRoles.some((role) => user.roles.includes(role));
    if (!hasRole) {
      const requiredRolesStr = requiredRoles.join(', ');
      throw new ForbiddenException(
        `Accès refusé : rôle(s) requis(s) : ${requiredRolesStr}`,
      );
    }

    return true;
  }
}
