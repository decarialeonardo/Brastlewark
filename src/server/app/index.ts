import * as express from 'express';
import * as path from 'path';
import config from '../config';

const DIST_PATH = path.join(__dirname, '../../dist');

const app = express();

app.disable('x-powered-by');
app.set('views', DIST_PATH);
app.set('view engine', 'html');

app.use('/static', express.static(DIST_PATH));

app.get('/',(req, res) => {
    res.sendFile(path.join(`${config.buildPath}/../views/index.html`));
});

export default app;
