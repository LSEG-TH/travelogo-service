import express from 'express';
// import * as dotenv from 'dotenv';
import * as dotenv from 'dotenv';

dotenv.config({ path:__dirname + '/configs/.env' });
const app = express();

// Import Prefix middleware
import middleware from './middlewares/middlewareIndex';
app.use('/', middleware);

// // Import router
// import router from './routes/routeIndex';
// app.use('/', router);

// Non DB Initiate version
app.listen(process.env.SERVER_PORT || 3030, () => {
	console.log(`Application started on port ${process.env.SERVER_PORT || 3030}!`);
});