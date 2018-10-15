const env = process.env.NODE_ENV || 'local';
//const config = require(`./${env.toLowerCase()}.js`).default;
import config from './local';
export default config;
