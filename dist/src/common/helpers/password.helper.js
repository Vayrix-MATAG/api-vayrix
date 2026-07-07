"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasStrongPassword = hasStrongPassword;
function hasStrongPassword(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
}
//# sourceMappingURL=password.helper.js.map