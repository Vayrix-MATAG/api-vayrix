export const APP_ROLES = {
  CLIENT: 'CLIENT',
  CHAUFFEUR: 'CHAUFFEUR',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

export type AppRole = (typeof APP_ROLES)[keyof typeof APP_ROLES];

export const SIGNUP_ROLES = [APP_ROLES.CLIENT, APP_ROLES.CHAUFFEUR] as const;

/** Rôles autorisés à gérer l'administration (rôles, etc.) */
export const ADMIN_ACCESS_ROLES = [
  APP_ROLES.ADMIN,
  APP_ROLES.SUPER_ADMIN,
] as const;
