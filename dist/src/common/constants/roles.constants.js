"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMIN_ACCESS_ROLES = exports.SIGNUP_ROLES = exports.APP_ROLES = void 0;
exports.APP_ROLES = {
    CLIENT: 'CLIENT',
    CHAUFFEUR: 'CHAUFFEUR',
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN',
};
exports.SIGNUP_ROLES = [exports.APP_ROLES.CLIENT, exports.APP_ROLES.CHAUFFEUR];
exports.ADMIN_ACCESS_ROLES = [
    exports.APP_ROLES.ADMIN,
    exports.APP_ROLES.SUPER_ADMIN,
];
//# sourceMappingURL=roles.constants.js.map