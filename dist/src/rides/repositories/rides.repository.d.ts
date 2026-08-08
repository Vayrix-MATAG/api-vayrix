import { Prisma, Course, ParticipantCourse } from "@prisma/client";
import { PrismaService } from '../../prisma/prisma.service';
export type CourseWithDetails = any;
export type ParticipantWithClient = any;
export declare class RidesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.CourseCreateInput): Promise<Course>;
    createParticipant(data: Prisma.ParticipantCourseCreateInput): Promise<ParticipantCourse>;
    findById(id: bigint): Promise<CourseWithDetails | null>;
    findByIdSimple(id: bigint): Promise<Course | null>;
    findParticipantById(id: bigint): Promise<ParticipantWithClient | null>;
    findParticipantsByCourseId(courseId: bigint): Promise<ParticipantWithClient[]>;
    findByClientId(clientId: bigint, options?: {
        skip?: number;
        take?: number;
        orderBy?: Prisma.CourseOrderByWithRelationInput;
    }): Promise<CourseWithDetails[]>;
    findByChauffeurId(chauffeurId: bigint, options?: {
        skip?: number;
        take?: number;
        orderBy?: Prisma.CourseOrderByWithRelationInput;
    }): Promise<CourseWithDetails[]>;
    update(id: bigint, data: Prisma.CourseUpdateInput): Promise<CourseWithDetails>;
    updateParticipant(id: bigint, data: Prisma.ParticipantCourseUpdateInput): Promise<ParticipantWithClient>;
    countByClientId(clientId: bigint): Promise<number>;
    countByChauffeurId(chauffeurId: bigint): Promise<number>;
    transaction<T>(callback: (tx: PrismaService) => Promise<T>): Promise<T>;
}
