"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseType = exports.ParticipantStatus = exports.CourseStatus = void 0;
var CourseStatus;
(function (CourseStatus) {
    CourseStatus["DEMANDEE"] = "DEMANDEE";
    CourseStatus["EN_RECHERCHE"] = "EN_RECHERCHE";
    CourseStatus["ACCEPTEE"] = "ACCEPTEE";
    CourseStatus["EN_COURS"] = "EN_COURS";
    CourseStatus["TERMINEE"] = "TERMINEE";
    CourseStatus["ANNULEE"] = "ANNULEE";
})(CourseStatus || (exports.CourseStatus = CourseStatus = {}));
var ParticipantStatus;
(function (ParticipantStatus) {
    ParticipantStatus["EN_ATTENTE"] = "EN_ATTENTE";
    ParticipantStatus["CONFIRME"] = "CONFIRME";
    ParticipantStatus["EN_COURS"] = "EN_COURS";
    ParticipantStatus["TERMINE"] = "TERMINE";
    ParticipantStatus["ANNULE"] = "ANNULE";
})(ParticipantStatus || (exports.ParticipantStatus = ParticipantStatus = {}));
var CourseType;
(function (CourseType) {
    CourseType["STANDARD"] = "STANDARD";
    CourseType["PREMIUM"] = "PREMIUM";
    CourseType["EXPRESS"] = "EXPRESS";
})(CourseType || (exports.CourseType = CourseType = {}));
//# sourceMappingURL=ride-status.interface.js.map