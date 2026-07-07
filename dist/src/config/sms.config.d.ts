declare const _default: (() => {
    provider: "mock" | "http";
    apiUrl: string | undefined;
    apiKey: string | undefined;
    apiSecret: string | undefined;
    senderId: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    provider: "mock" | "http";
    apiUrl: string | undefined;
    apiKey: string | undefined;
    apiSecret: string | undefined;
    senderId: string;
}>;
export default _default;
