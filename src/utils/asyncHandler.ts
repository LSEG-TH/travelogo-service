import { NextFunction, Request, Response } from 'express';

/**
 * Handle async error pre express-5.x
 * @param fn
 */
const asyncMiddleware =
	(fn) => (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};

export default asyncMiddleware;
