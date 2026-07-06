import { Injectable } from '@nestjs/common';
import { DriverProfile, DriverStatus, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { buildPaginatedResult, buildSearchOr, getPaginationParams } from '../../common/utils/pagination.util';
import { PaginatedResult, PaginationOptions } from '../../common/interfaces/pagination.interface';

const DRIVER_INCLUDE = {
  user: {
    select: { id: true, firstName: true, lastName: true, email: true, phone: true },
  },
} satisfies Prisma.DriverProfileInclude;

export type DriverWithUser = Prisma.DriverProfileGetPayload<{ include: typeof DRIVER_INCLUDE }>;

@Injectable()
export class DriversRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.DriverProfileCreateInput): Promise<DriverProfile> {
    return this.prisma.driverProfile.create({ data });
  }

  async findById(id: string): Promise<DriverProfile | null> {
    return this.prisma.driverProfile.findUnique({ where: { id } });
  }

  async findByUserId(userId: string): Promise<DriverProfile | null> {
    return this.prisma.driverProfile.findUnique({ where: { userId } });
  }

  async findDetailById(id: string): Promise<DriverWithUser | null> {
    return this.prisma.driverProfile.findUnique({
      where: { id },
      include: DRIVER_INCLUDE,
    });
  }

  async findAll(options: PaginationOptions & { status?: DriverStatus; isApproved?: boolean }): Promise<PaginatedResult<DriverWithUser>> {
    const { skip, take, orderBy } = getPaginationParams(options);
    const searchOr = buildSearchOr(options.search, ['firstName', 'lastName', 'email', 'phone']);

    const where: Prisma.DriverProfileWhereInput = {
      ...(options.status && { status: options.status }),
      ...(typeof options.isApproved === 'boolean' && { isApproved: options.isApproved }),
      ...(searchOr && { user: { OR: searchOr } }),
    };

    const [data, total] = await Promise.all([
      this.prisma.driverProfile.findMany({ where, skip, take, orderBy, include: DRIVER_INCLUDE }),
      this.prisma.driverProfile.count({ where }),
    ]);

    return buildPaginatedResult(data, total, options.page, options.limit);
  }

  async update(id: string, data: Prisma.DriverProfileUpdateInput): Promise<DriverWithUser> {
    return this.prisma.driverProfile.update({ where: { id }, data, include: DRIVER_INCLUDE });
  }
}
