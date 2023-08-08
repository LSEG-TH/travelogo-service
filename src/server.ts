import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/configs/.env' });
const app = express();

// Import Prefix middleware
import middleware from './middlewares/middlewareIndex';
import routerApi from './routes/routeApi';

app.use('/', middleware);
app.use('/api', routerApi);

// Non DB Initiate version
app.listen(process.env.SERVER_PORT || 3030, () => {
	console.log(
		`Application started on port ${process.env.SERVER_PORT || 3030}!`
	);
});
