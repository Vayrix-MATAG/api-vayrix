import { Injectable } from '@nestjs/common';
import { Notification, NotificationType, Prisma } from '@prisma/client';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';
import { buildPaginatedResult, getPaginationParams } from '../../common/utils/pagination.util';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.NotificationCreateInput): Promise<Notification> { return this.prisma.notification.create({ data }); }
  async findAll(userId: string, options: PaginationOptions & { type?: NotificationType; isRead?: boolean }): Promise<PaginatedResult<Notification>> {
    const { skip, take, orderBy } = getPaginationParams(options);
    const where: Prisma.NotificationWhereInput = { userId, ...(options.type && { type: options.type }), ...(typeof options.isRead === 'boolean' && { isRead: options.isRead }) };
    const [data, total] = await Promise.all([this.prisma.notification.findMany({ where, skip, take, orderBy }), this.prisma.notification.count({ where })]);
    return buildPaginatedResult(data, total, options.page, options.limit);
  }
  async markAsRead(id: string): Promise<Notification> { return this.prisma.notification.update({ where: { id }, data: { isRead: true } }); }
}
