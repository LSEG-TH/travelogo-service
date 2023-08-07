import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
// import { tokenHeader } from '../validators/validatorMiddleware';
import { ExpressError } from '../types/error';
import asyncMiddleware from '../utils/asyncHandler';

const router = express.Router();

router.use('*', helmet());

/**
 * Handle token session and pass session info into app controller.
 * Noted that this is the info before any change from the current request. For better precise result. Request it again before return or use it.
 */
router.use(
	'*',
	asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
		const reqData = {
			token: req.header('token') || ''
		};

		/**
		 * Using Joi Validator to validate object in a uniform format.
		 */

		// const { error } = tokenHeader(reqData);
		// if (error) {
		// 	const err: ExpressError = new Error(error.message);
		// 	err.status = 400;
		// 	return next(err);
		// }

		// const userInfo = await findInfoFromToken(req.app.locals.db.dbHandlerName.request(), reqData.token);
		// res.locals.session = { ...userInfo };
		next();
	})
);
export default router;
