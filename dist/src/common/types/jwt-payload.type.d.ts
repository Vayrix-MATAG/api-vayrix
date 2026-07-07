export type JwtPayloadType = {
    sub: string;
    email: string;
    roles: string[];
    iat?: number;
    exp?: number;
};
