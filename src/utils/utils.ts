import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { ExpressError } from '../types/error';

/**
 * Throw 400 bad request error on non JSON request type.
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {NextFunction} next NextFunction
 * @returns {void | NextFunction} void on non error
 */
const handleJsonRequest = (
	req: Request,
	res: Response,
	next: NextFunction
): void | NextFunction => {
	if (!req.is('application/json')) {
		const err: ExpressError = new Error('Expect content to be json.');
		err.status = 400;
		return next(err);
	}
};

const saltRounds = process.env.saltRound || 10;

const hashPassword = async (password: string): Promise<string> => {
	const hashPassword = await bcrypt.hash(password, saltRounds);
	return hashPassword;
};

const checkPassword = async (
	password: string,
	hashPassword: string
): Promise<boolean> => {
	const comparator = await bcrypt.compare(password, hashPassword);
	return comparator;
};

export { handleJsonRequest, hashPassword, checkPassword };
