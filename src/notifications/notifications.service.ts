import { Injectable } from '@nestjs/common';
import { NotificationType } from '@prisma/client';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { NotificationsQueryDto } from './dto/notifications.dto';
import { NotificationEntity } from './entities/notification.entity';
import { NotificationsRepository } from './repositories/notifications.repository';

@Injectable()
export class NotificationsService {
  constructor(private readonly notificationsRepository: NotificationsRepository) {}
  async createInternal(userId: string, type: keyof typeof NotificationType | NotificationType, title: string, message: string, rideId?: string) {
    return this.notificationsRepository.create({ user: { connect: { id: userId } }, ...(rideId && { ride: { connect: { id: rideId } } }), type: type as NotificationType, title, message });
  }
  async findAll(userId: string, query: NotificationsQueryDto): Promise<PaginatedResponseDto<NotificationEntity>> {
    const page = query.page ?? 1; const limit = query.limit ?? 10;
    const result = await this.notificationsRepository.findAll(userId, { page, limit, sortBy: query.sortBy, sortOrder: query.sortOrder, type: query.type, isRead: query.isRead });
    return new PaginatedResponseDto(result.data, result.total, page, limit);
  }
  async markAsRead(id: string): Promise<NotificationEntity> { return this.notificationsRepository.markAsRead(id); }
}
