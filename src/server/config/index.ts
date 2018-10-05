const env = process.env.NODE_ENV || 'local';
const config = require(`./${env.toLowerCase()}.js`).default;
export default config;
