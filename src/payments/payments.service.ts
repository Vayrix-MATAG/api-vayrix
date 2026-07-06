import { Injectable } from '@nestjs/common';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { PaymentsQueryDto } from './dto/payments.dto';
import { PaymentEntity } from './entities/payment.entity';
import { PaymentsRepository } from './repositories/payments.repository';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}
  async findAll(query: PaymentsQueryDto): Promise<PaginatedResponseDto<PaymentEntity>> {
    const page = query.page ?? 1; const limit = query.limit ?? 10;
    const result = await this.paymentsRepository.findAll({ page, limit, sortBy: query.sortBy, sortOrder: query.sortOrder, status: query.status, method: query.method });
    return new PaginatedResponseDto(result.data.map((item) => ({ ...item, amount: String(item.amount) })), result.total, page, limit);
  }
}
