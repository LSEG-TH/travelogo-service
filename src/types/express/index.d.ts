// src/types/express/index.d.ts
import mssql, { ConnectionPool } from 'mssql';
import { DatabaseUserProfile } from '../user';
// to make the file a module and avoid the TypeScript error
export {};

declare global {
	namespace Express {
		export interface Request {
			app: {
				locals: {
					//TO-DO: Add mock database request interface
				};
			};
			busboy;
		}
		export interface Response {
			locals: LocalsRequest;
		}
	}
}

interface LocalsRequest {
	session?: DatabaseUserProfile;
}
