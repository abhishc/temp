const dotenv = require('dotenv');
dotenv.config();

const rawNodeEnv = process.env.NODE_ENV || 'development';
const normalizedEnv = ['production', 'development', 'test'].includes(rawNodeEnv) ? rawNodeEnv : 'development';

const parsedPort = Number(process.env.PORT);
let port = 3000;
if (Number.isInteger(parsedPort) && parsedPort > 0) {
  port = parsedPort;
} else if (process.env.PORT) {
  console.warn(`[config] Invalid PORT="${process.env.PORT}". Falling back to 3000.`);
}

const host = process.env.HOST || '0.0.0.0';

const config = Object.freeze({
  port,
  host,
  nodeEnv: normalizedEnv,
  isProduction: normalizedEnv === 'production',
  isDevelopment: normalizedEnv === 'development'
});

module.exports = config;
