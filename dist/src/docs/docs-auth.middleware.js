"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidDocsToken = getValidDocsToken;
exports.serveLoginPage = serveLoginPage;
exports.createDocsAuthMiddleware = createDocsAuthMiddleware;
const fs_1 = require("fs");
const path_1 = require("path");
const jwt = __importStar(require("jsonwebtoken"));
const LOGIN_ASSETS = ['/docs-login.css', '/docs-login.js', '/swagger-custom.js'];
function getValidDocsToken(req, jwtSecret) {
    const token = req.cookies?.vayrix_docs_token;
    if (!token)
        return null;
    try {
        jwt.verify(token, jwtSecret);
        return token;
    }
    catch {
        return null;
    }
}
function serveLoginPage(publicPath, res) {
    res.type('html').send((0, fs_1.readFileSync)((0, path_1.join)(publicPath, 'docs-login.html'), 'utf8'));
}
function createDocsAuthMiddleware(jwtSecret, publicPath) {
    return (req, res, next) => {
        const path = req.path;
        if (path.startsWith('/assets/') || LOGIN_ASSETS.includes(path)) {
            next();
            return;
        }
        if (path === '/docs/login') {
            res.redirect(302, '/');
            return;
        }
        if (path === '/') {
            if (getValidDocsToken(req, jwtSecret)) {
                res.redirect(302, '/docs');
            }
            else {
                serveLoginPage(publicPath, res);
            }
            return;
        }
        if (!path.startsWith('/docs')) {
            next();
            return;
        }
        if (!getValidDocsToken(req, jwtSecret)) {
            res.clearCookie('vayrix_docs_token', { path: '/' });
            res.redirect(302, '/');
            return;
        }
        next();
    };
}
//# sourceMappingURL=docs-auth.middleware.js.map