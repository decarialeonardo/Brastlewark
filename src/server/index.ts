import * as express from 'express';
import * as cookieParser from 'cookie-parser';

import api from './api';

const basePath = '/gnomos';

const server: express.Application = express();
server.disable('x-powered-by');


// Enable cookie parsing
server.use(cookieParser());
server.use(function(err, req, res, next) {
  console.log(err);
  next();
});

// Mount an API application if you need
server.use(basePath + '/api', api);


export { server };
