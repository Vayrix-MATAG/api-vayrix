export declare const OTP_CANAL: {
    readonly EMAIL: "EMAIL";
    readonly SMS: "SMS";
};
export type OtpCanal = (typeof OTP_CANAL)[keyof typeof OTP_CANAL];
export declare const OTP_TYPE: {
    readonly LOGIN: "LOGIN";
    readonly RESET_PASSWORD: "RESET_PASSWORD";
    readonly VERIFY_ACCOUNT: "VERIFY_ACCOUNT";
};
export type OtpType = (typeof OTP_TYPE)[keyof typeof OTP_TYPE];
