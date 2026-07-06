declare const _default: () => {
    nodeEnv: string;
    port: number;
    apiPrefix: string;
    app: {
        frontendUrl: string;
    };
    database: {
        url: string | undefined;
        poolMax: number;
    };
    jwt: {
        secret: string;
        expiresIn: string;
        refreshSecret: string;
        refreshExpiresIn: string;
    };
    mail: {
        host: string | undefined;
        port: number;
        secure: boolean;
        user: string | undefined;
        password: string | undefined;
        fromEmail: string | undefined;
        fromName: string;
        logoUrl: string | undefined;
    };
    otp: {
        expiryMinutes: number;
        resendCooldownSeconds: number;
        maxAttempts: number;
    };
    sms: {
        provider: "mock" | "http";
        apiUrl: string | undefined;
        apiKey: string | undefined;
        apiSecret: string | undefined;
        senderId: string;
    };
    redis: {
        host: string;
        port: number;
        password: string | undefined;
    };
    cors: {
        origins: string[];
    };
    throttle: {
        ttl: number;
        limit: number;
    };
    storage: {
        path: string;
        maxFileSize: number;
    };
    pricing: {
        currency: string;
        baseFare: number;
        perKmRate: number;
        perMinRate: number;
    };
};
export default _default;
