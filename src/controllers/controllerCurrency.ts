import { NextFunction, Request, Response } from 'express';
import mockLocation from '../assets/mockLocation.json';
import { log } from 'console';

const getUserCurrency = (req: Request, res: Response, next: NextFunction) => {
	const params = req.query;
	const result = mockLocation.locations.find(
		(location) => location.name === params['location']
	);
	console.log(params, result);

	return res.json({ currency: result ? result.currency : 'USB' });
};

export { getUserCurrency };
