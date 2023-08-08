import { NextFunction, Request, Response } from 'express';
import mockBooking from '../assets/mockBooking.json';
import mockCurrency from '../assets/mockCurrency.json';
import mockGuest from '../assets/mockGuest.json';
import mockReview from '../assets/mockReview.json';
import mockTransaction from '../assets/mockTransaction.json';

const getBooking = (req: Request, res: Response, next: NextFunction) => {
	return res.json(mockBooking);
};

const getCurrency = (req: Request, res: Response, next: NextFunction) => {
	return res.json(mockCurrency);
};

const getGuest = (req: Request, res: Response, next: NextFunction) => {
	return res.json(mockGuest);
};

const getReview = (req: Request, res: Response, next: NextFunction) => {
	return res.json(mockReview);
};

const getTransaction = (req: Request, res: Response, next: NextFunction) => {
	return res.json(mockTransaction);
};

export { getBooking, getCurrency, getGuest, getReview, getTransaction };
