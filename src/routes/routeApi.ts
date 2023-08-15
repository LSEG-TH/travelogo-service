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
routerApi.get('/booking', getBooking);
routerApi.get('/currency', getCurrency);
routerApi.get('/guest', getGuest);
routerApi.get('/review', getReview);
routerApi.get('/transaction', getTransaction);

// dashboard data
routerApi.get('/oneYearSeasonalIncomeData', getOneYearSeasonalIncomeData);
routerApi.get('/threeYearsSeasonalIncomeData', getThreeYearsSeasonalIncomeData);

routerApi.get('/sixMonthsTurnupRatioData', getSixMonthsTurnupRatioData);
routerApi.get('/oneYearTurnupRatioData', getOneYearTurnupRatioData);
routerApi.get('/twoYearsTurnupRatioData', getTwoYearsTurnupRatioData);

routerApi.get('/sixMonthsGuestPerCountryData', getSixMonthsGuestPerCountryData);
routerApi.get('/oneYearGuestPerCountryData', getOneYearGuestPerCountryData);
routerApi.get('/twoYearsGuestPerCountryData', getTwoYearsGuestPerCountryData);

routerApi.get('/visitorTypeData', getVisitorTypeData);
routerApi.get('/roomTypesData', getRoomTypesData);
routerApi.get('/visitPurposeData', getVisitPurposeData);
routerApi.get('/stayingLengthData', getStayingLengthData);

export default routerApi;
