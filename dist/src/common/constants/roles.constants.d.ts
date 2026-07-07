export declare const APP_ROLES: {
    readonly CLIENT: "CLIENT";
    readonly CHAUFFEUR: "CHAUFFEUR";
    readonly ADMIN: "ADMIN";
    readonly SUPER_ADMIN: "SUPER_ADMIN";
};
export type AppRole = (typeof APP_ROLES)[keyof typeof APP_ROLES];
export declare const SIGNUP_ROLES: readonly ["CLIENT", "CHAUFFEUR"];
export declare const ADMIN_ACCESS_ROLES: readonly ["ADMIN", "SUPER_ADMIN"];
