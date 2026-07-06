/** Canal de distribution de l'OTP */
export const OTP_CANAL = {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
} as const;

export type OtpCanal = (typeof OTP_CANAL)[keyof typeof OTP_CANAL];

/** Type métier de l'OTP */
export const OTP_TYPE = {
  LOGIN: 'LOGIN',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_ACCOUNT: 'VERIFY_ACCOUNT',
} as const;

export type OtpType = (typeof OTP_TYPE)[keyof typeof OTP_TYPE];
