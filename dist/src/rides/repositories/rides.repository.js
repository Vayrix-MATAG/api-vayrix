"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
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
};
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
};
let RidesRepository = class RidesRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.course.create({ data });
    }
    async createParticipant(data) {
        return this.prisma.participantCourse.create({ data });
    }
    async findById(id) {
        return this.prisma.course.findUnique({
            where: { id },
            include: COURSE_INCLUDE,
        });
    }
    async findByIdSimple(id) {
        return this.prisma.course.findUnique({ where: { id } });
    }
    async findParticipantById(id) {
        return this.prisma.participantCourse.findUnique({
            where: { id },
            include: PARTICIPANT_INCLUDE,
        });
    }
    async findParticipantsByCourseId(courseId) {
        return this.prisma.participantCourse.findMany({
            where: { courseId },
            include: PARTICIPANT_INCLUDE,
        });
    }
    async findByClientId(clientId, options) {
        const { skip, take, orderBy } = options || {};
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
    async findByChauffeurId(chauffeurId, options) {
        const { skip, take, orderBy } = options || {};
        return this.prisma.course.findMany({
            where: { chauffeurId },
            include: COURSE_INCLUDE,
            skip,
            take,
            orderBy: orderBy || { dateCreation: 'desc' },
        });
    }
    async update(id, data) {
        return this.prisma.course.update({
            where: { id },
            data,
            include: COURSE_INCLUDE,
        });
    }
    async updateParticipant(id, data) {
        return this.prisma.participantCourse.update({
            where: { id },
            data,
            include: PARTICIPANT_INCLUDE,
        });
    }
    async countByClientId(clientId) {
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
    async countByChauffeurId(chauffeurId) {
        return this.prisma.course.count({
            where: { chauffeurId },
        });
    }
    async transaction(callback) {
        return this.prisma.withTransaction(callback);
    }
};
exports.RidesRepository = RidesRepository;
exports.RidesRepository = RidesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RidesRepository);
//# sourceMappingURL=rides.repository.js.map