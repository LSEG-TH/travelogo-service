export interface SuccessRestResponse {
	ok: boolean;
	message: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
}

export interface ErrorRestResponse {
	ok: boolean;
	message: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
	stack?: string;
}
