/** Noms de rôles applicatifs (table Role) */
export const APP_ROLES = {
  CLIENT: 'CLIENT',
  CHAUFFEUR: 'CHAUFFEUR',
  ADMIN: 'ADMIN',
} as const;

export type AppRole = (typeof APP_ROLES)[keyof typeof APP_ROLES];

export const SIGNUP_ROLES = [APP_ROLES.CLIENT, APP_ROLES.CHAUFFEUR] as const;

export type SignupRole = (typeof SIGNUP_ROLES)[number];
