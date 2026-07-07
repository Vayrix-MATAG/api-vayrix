import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class OtpGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<{ otpValidated?: boolean }>();

    if (!request.otpValidated) {
      throw new UnauthorizedException('Validation OTP requise');
    }

    return true;
  }
}
