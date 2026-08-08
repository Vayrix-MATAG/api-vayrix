"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesModule = void 0;
const common_1 = require("@nestjs/common");
const rides_controller_1 = require("./rides.controller");
const rides_service_1 = require("./rides.service");
const rides_repository_1 = require("./repositories/rides.repository");
const tarification_service_1 = require("./services/tarification.service");
const distance_service_1 = require("./services/distance.service");
const course_state_machine_service_1 = require("./services/course-state-machine.service");
const driver_matching_service_1 = require("./services/driver-matching.service");
const prisma_module_1 = require("../prisma/prisma.module");
const users_module_1 = require("../users/users.module");
const drivers_module_1 = require("../drivers/drivers.module");
let RidesModule = class RidesModule {
};
exports.RidesModule = RidesModule;
exports.RidesModule = RidesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, users_module_1.UsersModule, drivers_module_1.DriversModule],
        controllers: [rides_controller_1.RidesController],
        providers: [
            rides_service_1.RidesService,
            rides_repository_1.RidesRepository,
            tarification_service_1.TarificationService,
            distance_service_1.DistanceService,
            course_state_machine_service_1.CourseStateMachine,
            driver_matching_service_1.DriverMatchingService,
        ],
        exports: [rides_service_1.RidesService, rides_repository_1.RidesRepository],
    })
], RidesModule);
//# sourceMappingURL=rides.module.js.map