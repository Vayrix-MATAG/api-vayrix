"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesMapper = void 0;
class RidesMapper {
    static toRideEntity(course) {
        return {
            id: course.id.toString(),
            adresseDepart: course.adresseDepart ?? '',
            latitudeDepart: course.latitudeDepart ?? 0,
            longitudeDepart: course.longitudeDepart ?? 0,
            adresseArrivee: course.adresseArrivee ?? '',
            latitudeArrivee: course.latitudeArrivee ?? 0,
            longitudeArrivee: course.longitudeArrivee ?? 0,
            distance: course.distance ? Number(course.distance) : undefined,
            dureeEstimee: course.dureeEstimee ? Number(course.dureeEstimee) : undefined,
            prixInitial: course.prixInitial ? Number(course.prixInitial) : undefined,
            prixNegocie: course.prixNegocie ? Number(course.prixNegocie) : undefined,
            prixFinal: course.prixFinal ? Number(course.prixFinal) : undefined,
            typeCourse: course.typeCourse,
            statut: course.statut,
            partageActif: course.partageActif,
            dateCreation: course.dateCreation,
            dateAcceptation: course.dateAcceptation ?? undefined,
            dateDebut: course.dateDebut ?? undefined,
            dateFin: course.dateFin ?? undefined,
            chauffeurId: course.chauffeurId?.toString(),
            vehiculeId: course.vehiculeId?.toString(),
            chauffeur: course.chauffeur
                ? {
                    id: course.chauffeur.id.toString(),
                    utilisateurId: course.chauffeur.utilisateurId.toString(),
                    nom: course.chauffeur.utilisateur?.nom ?? '',
                    prenom: course.chauffeur.utilisateur?.prenom ?? '',
                    telephone: course.chauffeur.utilisateur?.telephone ?? '',
                    numeroPermis: course.chauffeur.numeroPermis,
                    estEnLigne: course.chauffeur.estEnLigne,
                    statut: course.chauffeur.statut,
                }
                : undefined,
            vehicule: course.vehicule
                ? {
                    id: course.vehicule.id.toString(),
                    marque: course.vehicule.marque,
                    modele: course.vehicule.modele,
                    couleur: course.vehicule.couleur,
                    matricule: course.vehicule.matricule,
                    annee: course.vehicule.annee,
                    statut: course.vehicule.statut,
                }
                : undefined,
            participants: Array.isArray(course.participants) ? course.participants.map((p) => this.toParticipantEntity(p)) : [],
        };
    }
    static toParticipantEntity(participant) {
        return {
            id: participant.id.toString(),
            courseId: participant.courseId.toString(),
            clientId: participant.clientId.toString(),
            adresseDepart: participant.adresseDepart,
            latitudeDepart: participant.latitudeDepart,
            longitudeDepart: participant.longitudeDepart,
            adresseArrivee: participant.adresseArrivee,
            latitudeArrivee: participant.latitudeArrivee,
            longitudeArrivee: participant.longitudeArrivee,
            prixInitial: Number(participant.prixInitial),
            prixFinal: participant.prixFinal ? Number(participant.prixFinal) : undefined,
            economieClient: participant.economieClient ? Number(participant.economieClient) : undefined,
            statut: participant.statut,
            role: participant.role,
            heureMontee: participant.heureMontee ?? undefined,
            heureDescente: participant.heureDescente ?? undefined,
            dateCreation: participant.dateCreation,
            client: participant.client
                ? {
                    id: participant.client.id.toString(),
                    utilisateurId: participant.client.utilisateurId.toString(),
                    nom: participant.client.utilisateur?.nom ?? '',
                    prenom: participant.client.utilisateur?.prenom ?? '',
                    email: participant.client.utilisateur?.email ?? '',
                    telephone: participant.client.utilisateur?.telephone ?? '',
                }
                : undefined,
        };
    }
    static toRideEstimateEntity(tarificationResult, distanceResult) {
        return {
            distanceKm: tarificationResult.distance,
            dureeEstimeeMinutes: distanceResult.dureeEstimeeMinutes,
            prixDepart: tarificationResult.prixDepart,
            prixKm: tarificationResult.prixKm,
            prixMinimum: tarificationResult.prixMinimum,
            commission: tarificationResult.commission,
            prixCalcule: tarificationResult.prixCalcule,
            prixFinal: tarificationResult.prixFinal,
        };
    }
}
exports.RidesMapper = RidesMapper;
//# sourceMappingURL=rides.mapper.js.map