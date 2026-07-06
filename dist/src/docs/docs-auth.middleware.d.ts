import type { NextFunction, Request, Response } from 'express';
export declare function getValidDocsToken(req: Request, jwtSecret: string): string | null;
export declare function serveLoginPage(publicPath: string, res: Response): void;
export declare function createDocsAuthMiddleware(jwtSecret: string, publicPath: string): (req: Request, res: Response, next: NextFunction) => void;
