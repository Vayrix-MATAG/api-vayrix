import { CourseStatus } from '../interfaces/ride-status.interface';
export declare class CourseStateMachine {
    private readonly logger;
    private readonly transitions;
    canTransition(from: CourseStatus, to: CourseStatus): boolean;
    transition(from: CourseStatus, to: CourseStatus): void;
    getPossibleTransitions(from: CourseStatus): CourseStatus[];
    isTerminal(status: CourseStatus): boolean;
}
