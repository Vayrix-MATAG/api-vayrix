import { readFileSync } from 'fs';
import { join } from 'path';
import type { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const LOGIN_ASSETS = ['/docs-login.css', '/docs-login.js', '/swagger-custom.js'];

export function getValidDocsToken(req: Request, jwtSecret: string): string | null {
  const token = req.cookies?.vayrix_docs_token as string | undefined;
  if (!token) return null;

  try {
    jwt.verify(token, jwtSecret);
    return token;
  } catch {
    return null;
  }
}

export function serveLoginPage(publicPath: string, res: Response): void {
  res.type('html').send(readFileSync(join(publicPath, 'docs-login.html'), 'utf8'));
}

export function createDocsAuthMiddleware(jwtSecret: string, publicPath: string) {
  return (req: Request, res: Response, next: NextFunction): void => {
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
      } else {
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
