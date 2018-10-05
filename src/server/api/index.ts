import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import populationRouter from './population/population.router';

const api: express.Application = express();

api.disable('x-powered-by');

// Enable CORS
api.use(cors());

// Enable request body parsing
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.use('/population', populationRouter);

export default api;
