import express from 'express';
import {
	getBooking,
	getCurrency,
	getGuest,
	getReview,
	getTransaction
} from '../controllers/controllerApi';
import {
	getOneYearSeasonalIncomeData,
	getThreeYearsSeasonalIncomeData
} from '../controllers/controllerSeasonal';
import {
	getOneYearTurnupRatioData,
	getSixMonthsTurnupRatioData,
	getTwoYearsTurnupRatioData
} from '../controllers/controllerTurnupRatio';
import {
	getOneYearGuestPerCountryData,
	getSixMonthsGuestPerCountryData,
	getTwoYearsGuestPerCountryData
} from '../controllers/controllerGuestsPerCountry';
import {
	getRoomTypesData,
	getStayingLengthData,
	getVisitPurposeData,
	getVisitorTypeData
} from '../controllers/controllerMockupPie';

const routerApi = express.Router();
// mock data
routerApi.get('/v1/booking', getBooking);
routerApi.get('/v1/currency', getCurrency);
routerApi.get('/v1/guest', getGuest);
routerApi.get('/v1/review', getReview);
routerApi.get('/v1/transaction', getTransaction);

// dashboard data
routerApi.get('/v1/oneYearSeasonalIncomeData', getOneYearSeasonalIncomeData);
routerApi.get(
	'/v1/threeYearsSeasonalIncomeData',
	getThreeYearsSeasonalIncomeData
);

// TODO: adding the new route here

routerApi.get('/v1/sixMonthsTurnupRatioData', getSixMonthsTurnupRatioData);
routerApi.get('/v1/oneYearTurnupRatioData', getOneYearTurnupRatioData);
routerApi.get('/v1/twoYearsTurnupRatioData', getTwoYearsTurnupRatioData);

routerApi.get(
	'/v1/sixMonthsGuestPerCountryData',
	getSixMonthsGuestPerCountryData
);
routerApi.get('/v1/oneYearGuestPerCountryData', getOneYearGuestPerCountryData);
routerApi.get(
	'/v1/twoYearsGuestPerCountryData',
	getTwoYearsGuestPerCountryData
);

routerApi.get('/v1/visitorTypeData', getVisitorTypeData);
routerApi.get('/v1/roomTypesData', getRoomTypesData);
routerApi.get('/v1/visitPurposeData', getVisitPurposeData);
routerApi.get('/v1/stayingLengthData', getStayingLengthData);

export default routerApi;
