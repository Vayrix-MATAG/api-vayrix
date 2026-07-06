export declare class ApiResponseDto<T = unknown> {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;
    constructor(data: T, message?: string, success?: boolean);
}
export declare class ApiErrorResponseDto {
    success: boolean;
    statusCode: number;
    message: string | string[];
    timestamp: string;
}
