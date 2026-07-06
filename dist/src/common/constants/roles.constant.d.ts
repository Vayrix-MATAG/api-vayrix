export declare const APP_ROLES: {
    readonly CLIENT: "CLIENT";
    readonly CHAUFFEUR: "CHAUFFEUR";
    readonly ADMIN: "ADMIN";
};
export type AppRole = (typeof APP_ROLES)[keyof typeof APP_ROLES];
export declare const SIGNUP_ROLES: readonly ["CLIENT", "CHAUFFEUR"];
export type SignupRole = (typeof SIGNUP_ROLES)[number];
