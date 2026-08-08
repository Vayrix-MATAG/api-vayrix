import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Course, ParticipantCourse } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

const COURSE_INCLUDE = {
  chauffeur: {
    include: {
      utilisateur: {
        select: {
          id: true,
          nom: true,
          prenom: true,
          telephone: true,
        },
      },
    },
  },
  vehicule: true,
  participants: {
    include: {
      client: {
        include: {
          utilisateur: {
            select: {
              id: true,
              nom: true,
              prenom: true,
              email: true,
              telephone: true,
            },
          },
        },
      },
    },
  },
} as const;

export type CourseWithDetails = any;

const PARTICIPANT_INCLUDE = {
  client: {
    include: {
      utilisateur: {
        select: {
          id: true,
          nom: true,
          prenom: true,
          email: true,
          telephone: true,
        },
      },
    },
  },
} as const;

export type ParticipantWithClient = any;

@Injectable()
export class RidesRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Créer une nouvelle course
   */
  async create(data: Prisma.CourseCreateInput): Promise<Course> {
    return this.prisma.course.create({ data });
  }

  /**
   * Créer un participant à une course
   */
  async createParticipant(data: Prisma.ParticipantCourseCreateInput): Promise<ParticipantCourse> {
    return this.prisma.participantCourse.create({ data });
  }

  /**
   * Trouver une course par ID avec détails
   */
  async findById(id: bigint): Promise<CourseWithDetails | null> {
    return this.prisma.course.findUnique({
      where: { id },
      include: COURSE_INCLUDE,
    });
  }

  /**
   * Trouver une course par ID (sans détails)
   */
  async findByIdSimple(id: bigint): Promise<Course | null> {
    return this.prisma.course.findUnique({ where: { id } });
  }

  /**
   * Trouver un participant par ID
   */
  async findParticipantById(id: bigint): Promise<ParticipantWithClient | null> {
    return this.prisma.participantCourse.findUnique({
      where: { id },
      include: PARTICIPANT_INCLUDE,
    });
  }

  /**
   * Trouver les participants d'une course
   */
  async findParticipantsByCourseId(courseId: bigint): Promise<ParticipantWithClient[]> {
    return this.prisma.participantCourse.findMany({
      where: { courseId },
      include: PARTICIPANT_INCLUDE,
    });
  }

  /**
   * Trouver les courses d'un client
   */
  async findByClientId(
    clientId: bigint,
    options?: { skip?: number; take?: number; orderBy?: Prisma.CourseOrderByWithRelationInput },
  ): Promise<CourseWithDetails[]> {
    const { skip, take, orderBy } = options || {};

    // D'abord récupérer les IDs des courses du participant
    const participantCourses = await this.prisma.participantCourse.findMany({
      where: { clientId },
      select: { courseId: true },
    });

    const courseIds = participantCourses.map(p => p.courseId);

    if (courseIds.length === 0) {
      return [];
    }

    return this.prisma.course.findMany({
      where: { id: { in: courseIds } },
      include: COURSE_INCLUDE,
      skip,
      take,
      orderBy: orderBy || { dateCreation: 'desc' },
    });
  }

  /**
   * Trouver les courses d'un chauffeur
   */
  async findByChauffeurId(
    chauffeurId: bigint,
    options?: { skip?: number; take?: number; orderBy?: Prisma.CourseOrderByWithRelationInput },
  ): Promise<CourseWithDetails[]> {
    const { skip, take, orderBy } = options || {};

    return this.prisma.course.findMany({
      where: { chauffeurId },
      include: COURSE_INCLUDE,
      skip,
      take,
      orderBy: orderBy || { dateCreation: 'desc' },
    });
  }

  /**
   * Mettre à jour une course
   */
  async update(id: bigint, data: Prisma.CourseUpdateInput): Promise<CourseWithDetails> {
    return this.prisma.course.update({
      where: { id },
      data,
      include: COURSE_INCLUDE,
    });
  }

  /**
   * Mettre à jour un participant
   */
  async updateParticipant(id: bigint, data: Prisma.ParticipantCourseUpdateInput): Promise<ParticipantWithClient> {
    return this.prisma.participantCourse.update({
      where: { id },
      data,
      include: PARTICIPANT_INCLUDE,
    });
  }

  /**
   * Compter les courses d'un client
   */
  async countByClientId(clientId: bigint): Promise<number> {
    const participantCourses = await this.prisma.participantCourse.findMany({
      where: { clientId },
      select: { courseId: true },
    });

    const courseIds = participantCourses.map(p => p.courseId);

    if (courseIds.length === 0) {
      return 0;
    }

    return this.prisma.course.count({
      where: { id: { in: courseIds } },
    });
  }

  /**
   * Compter les courses d'un chauffeur
   */
  async countByChauffeurId(chauffeurId: bigint): Promise<number> {
    return this.prisma.course.count({
      where: { chauffeurId },
    });
  }

  /**
   * Transaction Prisma pour opérations atomiques
   */
  async transaction<T>(
    callback: (tx: PrismaService) => Promise<T>,
  ): Promise<T> {
    return this.prisma.withTransaction(callback);
  }
}
