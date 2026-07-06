import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SosRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.SosAlertCreateInput) { return this.prisma.sosAlert.create({ data }); }
  async update(id: string, data: Prisma.SosAlertUpdateInput) { return this.prisma.sosAlert.update({ where: { id }, data }); }
}
