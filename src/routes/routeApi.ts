import express from 'express';
import {
	getBooking,
	getCurrency,
	getGuest,
	getReview,
	getTransaction
} from '../controllers/controllerApi';

const routerApi = express.Router();
routerApi.get('/booking', getBooking);
routerApi.get('/currency', getCurrency);
routerApi.get('/guest', getGuest);
routerApi.get('/review', getReview);
routerApi.get('/transaction', getTransaction);

export default routerApi;
