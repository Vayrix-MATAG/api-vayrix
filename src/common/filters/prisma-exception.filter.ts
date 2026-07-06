import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../../generated/prisma/client';
import { Response } from 'express';

/** Traduit les erreurs Prisma en exceptions HTTP compréhensibles */
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.BAD_REQUEST;
    let message = 'Erreur de base de données';

    switch (exception.code) {
      case 'P2002':
        status = HttpStatus.CONFLICT;
        message = 'Une ressource avec ces données existe déjà';
        break;
      case 'P2025':
        status = HttpStatus.NOT_FOUND;
        message = 'Ressource introuvable';
        break;
      case 'P2003':
        status = HttpStatus.BAD_REQUEST;
        message = 'Référence invalide';
        break;
      default:
        break;
    }

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      code: exception.code,
      timestamp: new Date().toISOString(),
    });
  }
}
