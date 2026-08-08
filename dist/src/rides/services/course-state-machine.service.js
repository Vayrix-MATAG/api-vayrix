"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CourseStateMachine_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseStateMachine = void 0;
const common_1 = require("@nestjs/common");
const ride_status_interface_1 = require("../interfaces/ride-status.interface");
let CourseStateMachine = CourseStateMachine_1 = class CourseStateMachine {
    logger = new common_1.Logger(CourseStateMachine_1.name);
    transitions = {
        [ride_status_interface_1.CourseStatus.DEMANDEE]: [ride_status_interface_1.CourseStatus.EN_RECHERCHE, ride_status_interface_1.CourseStatus.ANNULEE],
        [ride_status_interface_1.CourseStatus.EN_RECHERCHE]: [ride_status_interface_1.CourseStatus.ACCEPTEE, ride_status_interface_1.CourseStatus.ANNULEE],
        [ride_status_interface_1.CourseStatus.ACCEPTEE]: [ride_status_interface_1.CourseStatus.EN_COURS, ride_status_interface_1.CourseStatus.ANNULEE],
        [ride_status_interface_1.CourseStatus.EN_COURS]: [ride_status_interface_1.CourseStatus.TERMINEE, ride_status_interface_1.CourseStatus.ANNULEE],
        [ride_status_interface_1.CourseStatus.TERMINEE]: [],
        [ride_status_interface_1.CourseStatus.ANNULEE]: [],
    };
    canTransition(from, to) {
        return this.transitions[from]?.includes(to) ?? false;
    }
    transition(from, to) {
        if (!this.canTransition(from, to)) {
            this.logger.warn(`Transition invalide: ${from} -> ${to}. Transitions autorisées: ${this.transitions[from]?.join(', ') || 'aucune'}`);
            throw new common_1.BadRequestException(`Transition de statut invalide: ${from} -> ${to}. Transitions autorisées: ${this.transitions[from]?.join(', ') || 'aucune'}`);
        }
        this.logger.log(`Transition autorisée: ${from} -> ${to}`);
    }
    getPossibleTransitions(from) {
        return this.transitions[from] ?? [];
    }
    isTerminal(status) {
        return this.transitions[status]?.length === 0;
    }
};
exports.CourseStateMachine = CourseStateMachine;
exports.CourseStateMachine = CourseStateMachine = CourseStateMachine_1 = __decorate([
    (0, common_1.Injectable)()
], CourseStateMachine);
//# sourceMappingURL=course-state-machine.service.js.map