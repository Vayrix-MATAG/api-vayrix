"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DistanceService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceService = void 0;
const common_1 = require("@nestjs/common");
let DistanceService = DistanceService_1 = class DistanceService {
    logger = new common_1.Logger(DistanceService_1.name);
    EARTH_RADIUS_KM = 6371;
    AVERAGE_SPEED_KMH = 30;
    calculateDistance(lat1, lon1, lat2, lon2) {
        const distanceKm = this.haversine(lat1, lon1, lat2, lon2);
        const dureeEstimeeMinutes = Math.ceil((distanceKm / this.AVERAGE_SPEED_KMH) * 60);
        this.logger.log(`Distance calculée: ${lat1},${lon1} -> ${lat2},${lon2} = ${distanceKm.toFixed(2)}km (${dureeEstimeeMinutes}min)`);
        return {
            distanceKm,
            dureeEstimeeMinutes,
        };
    }
    haversine(lat1, lon1, lat2, lon2) {
        const dLat = this.toRadians(lat2 - lat1);
        const dLon = this.toRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRadians(lat1)) *
                Math.cos(this.toRadians(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.EARTH_RADIUS_KM * c;
    }
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
};
exports.DistanceService = DistanceService;
exports.DistanceService = DistanceService = DistanceService_1 = __decorate([
    (0, common_1.Injectable)()
], DistanceService);
//# sourceMappingURL=distance.service.js.map