import { NextFunction, Request, Response } from 'express';
import { SuccessRestResponse } from '../types/restResponse';
import { ExpressError } from '../types/error';

import { handleJsonRequest, hashPassword, checkPassword } from '../utils/utils';
import { loginSchema } from '../validators/validatorGeneric';
// import { samplingInsert } from '../models/sampleModel';
import asyncMiddleware from '../utils/asyncHandler';

import jwt from 'jsonwebtoken';

const login = asyncMiddleware(
	async (req: Request, res: Response, next: NextFunction) => {
		const reqData = {
			username: req.header('username') || '',
			password: req.header('password') || ''
		};
		const { error } = loginSchema(reqData);
		if (error) {
			const err: ExpressError = new Error(error.message);
			err.status = 400;
			return next(err);
		}

		//TO-DO

		// find hashPassword from mock file

		// compare password
		// const isPasswordCorrect = await checkPassword("password", "password from db");

		// if (!isPasswordCorrect) {
		// 	const err: ExpressError = new Error('Invalid userId or Password');
		// 	err.status = 400;
		// 	return next(err);
		// }

		const token = jwt.sign(
			{
				data: {
					username: reqData.username
				}
			},
			process.env.JWT_SECRET
		);

		const response: SuccessRestResponse = {
			ok: true,
			message: 'Login success.',
			data: {
				username: reqData.username,
				token: token
			}
		};
		res.status(200).send(response);
	}
);

export { login };
