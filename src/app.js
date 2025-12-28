const express = require('express');
const { securityHeaders, corsMiddleware, jsonParser, requestLogger, errorHandler } = require('./middleware');
const routes = require('./routes');

const app = express();

// Apply middleware in order:
// 1. Security headers (helmet)
app.use(securityHeaders);

// 2. CORS (handles preflight automatically)
app.use(corsMiddleware);

// 3. JSON body parser
app.use(jsonParser);

// 4. Request logger
app.use(requestLogger);

// 5. Routes
app.use('/', routes);

// 6. Error handler (must be last)
app.use(errorHandler);

module.exports = app;
