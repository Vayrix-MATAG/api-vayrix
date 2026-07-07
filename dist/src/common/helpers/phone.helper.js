"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePhone = normalizePhone;
exports.isLikelyInternationalPhone = isLikelyInternationalPhone;
function normalizePhone(phone) {
    return phone.replace(/[^\d+]/g, '').trim();
}
function isLikelyInternationalPhone(phone) {
    return /^\+\d{8,15}$/.test(normalizePhone(phone));
}
//# sourceMappingURL=phone.helper.js.map