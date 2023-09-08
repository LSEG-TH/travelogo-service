import { Request, Response } from 'express';
const visitorTypeData = {
	labels: ['Solo', 'Friends', 'Family', 'Couple'],
	datasets: [
		{
			data: [28, 16, 12, 44]
		}
	]
};

const roomTypesData = {
	labels: ['Standard', 'Deluxe', 'Villa'],
	datasets: [
		{
			data: [60, 28, 12],
			backgroundColor: ['#A3204C', '#174A66', '#AF583A'],
			borderColor: ['#A3204C', '#174A66', '#AF583A']
		}
	]
};

const visitPurposeData = {
	labels: ['Leisure', 'Work'],
	datasets: [
		{
			data: [60, 40],
			backgroundColor: ['#236F99', '#116262'],
			borderColor: ['#236F99', '#116262']
		}
	]
};

const stayingLengthData = {
	labels: ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '1 Week',],
	datasets: [
		{
			data: [16, 16, 20, 12, 24, 12]
		}
	]
};

export { visitPurposeData, visitorTypeData, roomTypesData, stayingLengthData };

const getVisitorTypeData = (req: Request, res: Response) => {
	return res.json(visitorTypeData);
};

const getRoomTypesData = (req: Request, res: Response) => {
	return res.json(roomTypesData);
};

const getVisitPurposeData = (req: Request, res: Response) => {
	return res.json(visitPurposeData);
};

const getStayingLengthData = (req: Request, res: Response) => {
	return res.json(stayingLengthData);
};

export {
	getVisitorTypeData,
	getRoomTypesData,
	getVisitPurposeData,
	getStayingLengthData
};
