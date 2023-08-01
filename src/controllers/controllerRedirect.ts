import { NextFunction, Request, Response } from 'express';
import { ExpressError } from '../types/error';

const getRedirect = (req: Request, res: Response, next: NextFunction) => {
	const err: ExpressError = new Error('404 Not found');
	err.status = 404;
	return next(err);
};

export { getRedirect };
