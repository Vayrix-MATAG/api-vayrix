import { Injectable } from '@nestjs/common';
import { Payment, PaymentMethod, PaymentStatus, Prisma } from '@prisma/client';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';
import { buildPaginatedResult, getPaginationParams } from '../../common/utils/pagination.util';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PaymentsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.PaymentCreateInput): Promise<Payment> { return this.prisma.payment.create({ data }); }
  async findAll(options: PaginationOptions & { status?: PaymentStatus; method?: PaymentMethod }): Promise<PaginatedResult<Payment>> {
    const { skip, take, orderBy } = getPaginationParams(options);
    const where: Prisma.PaymentWhereInput = { ...(options.status && { status: options.status }), ...(options.method && { method: options.method }) };
    const [data, total] = await Promise.all([this.prisma.payment.findMany({ where, skip, take, orderBy }), this.prisma.payment.count({ where })]);
    return buildPaginatedResult(data, total, options.page, options.limit);
  }
  async update(id: string, data: Prisma.PaymentUpdateInput): Promise<Payment> { return this.prisma.payment.update({ where: { id }, data }); }
}
