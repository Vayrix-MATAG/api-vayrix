"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTitleCase = toTitleCase;
exports.compactWhitespace = compactWhitespace;
function toTitleCase(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}
function compactWhitespace(value) {
    return value.replace(/\s+/g, ' ').trim();
}
//# sourceMappingURL=string.helper.js.map