import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { CourseStatus } from '../interfaces/ride-status.interface';

/**
 * Machine à états pour les transitions de statut de course
 * Garantit que seules les transitions valides sont autorisées
 */
@Injectable()
export class CourseStateMachine {
  private readonly logger = new Logger(CourseStateMachine.name);

  /**
   * Transitions autorisées
   * Clé: statut actuel
   * Valeur: liste des statuts vers lesquels on peut transitionner
   */
  private readonly transitions: Record<CourseStatus, CourseStatus[]> = {
    [CourseStatus.DEMANDEE]: [CourseStatus.EN_RECHERCHE, CourseStatus.ANNULEE],
    [CourseStatus.EN_RECHERCHE]: [CourseStatus.ACCEPTEE, CourseStatus.ANNULEE],
    [CourseStatus.ACCEPTEE]: [CourseStatus.EN_COURS, CourseStatus.ANNULEE],
    [CourseStatus.EN_COURS]: [CourseStatus.TERMINEE, CourseStatus.ANNULEE],
    [CourseStatus.TERMINEE]: [], // État terminal
    [CourseStatus.ANNULEE]: [], // État terminal
  };

  /**
   * Vérifier si une transition est autorisée
   */
  canTransition(from: CourseStatus, to: CourseStatus): boolean {
    return this.transitions[from]?.includes(to) ?? false;
  }

  /**
   * Effectuer une transition de statut
   * @throws BadRequestException si la transition n'est pas autorisée
   */
  transition(from: CourseStatus, to: CourseStatus): void {
    if (!this.canTransition(from, to)) {
      this.logger.warn(
        `Transition invalide: ${from} -> ${to}. Transitions autorisées: ${this.transitions[from]?.join(', ') || 'aucune'}`,
      );
      throw new BadRequestException(
        `Transition de statut invalide: ${from} -> ${to}. Transitions autorisées: ${this.transitions[from]?.join(', ') || 'aucune'}`,
      );
    }

    this.logger.log(`Transition autorisée: ${from} -> ${to}`);
  }

  /**
   * Obtenir les transitions possibles depuis un statut
   */
  getPossibleTransitions(from: CourseStatus): CourseStatus[] {
    return this.transitions[from] ?? [];
  }

  /**
   * Vérifier si un statut est terminal
   */
  isTerminal(status: CourseStatus): boolean {
    return this.transitions[status]?.length === 0;
  }
}
