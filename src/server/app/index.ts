import * as express from 'express';
import * as path from 'path';
import config from '../config';

const DIST_PATH = path.join(__dirname, '../../dist');

const app = express();

app.disable('x-powered-by');
app.set('views', DIST_PATH);
app.set('view engine', 'jade');

app.use('/static', express.static(DIST_PATH));

app.get('/:results',(req, res) => {
    res.render(path.join(`${config.buildPath}/../views/index`));
});

export default app;
