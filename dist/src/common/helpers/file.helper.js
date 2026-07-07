"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytesToMb = bytesToMb;
exports.getFileExtension = getFileExtension;
function bytesToMb(bytes) {
    return Number((bytes / (1024 * 1024)).toFixed(2));
}
function getFileExtension(filename) {
    const parts = filename.split('.');
    return parts.length > 1 ? parts.pop().toLowerCase() : '';
}
//# sourceMappingURL=file.helper.js.map