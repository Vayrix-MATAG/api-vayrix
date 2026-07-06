/** Utilisateur authentifié injecté par Passport JWT */
export interface AuthenticatedUser {
  id: string;
  email: string;
  roles: string[];
}
