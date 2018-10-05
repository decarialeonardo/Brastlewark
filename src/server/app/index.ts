import * as express from 'express';
import * as path from 'path';

const DIST_PATH = path.join(__dirname, '../../dist');

const app = express();

app.disable('x-powered-by');
app.set('views', DIST_PATH);
app.set('view engine', 'html');

app.use('/dist', express.static(DIST_PATH));

export default app;
