"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toIsoDate = toIsoDate;
exports.nowIso = nowIso;
function toIsoDate(value) {
    return new Date(value).toISOString();
}
function nowIso() {
    return new Date().toISOString();
}
//# sourceMappingURL=date.helper.js.map