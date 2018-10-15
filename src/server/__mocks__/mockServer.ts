import * as express from 'express';
import * as cookieParser from 'cookie-parser';

import api from '../api';
import app from '../app';


const basePath = '/brastlewark';

const server: express.Application = express();
server.disable('x-powered-by');

// Enable cookie parsing
server.use(cookieParser());

// Mount an API application if you need
server.use(basePath + '/api', api);

// APP 
server.use(basePath , app);

server.use((err:any, req: any, res: any, next: any) => {
    res.status(err.httpStatus || 500).json(Object.assign({}, err, { message: err.message }));
    next();
});


export { server };