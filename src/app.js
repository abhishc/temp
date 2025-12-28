const express = require('express');
const { jsonParser, requestLogger, errorHandler } = require('./middleware');
const routes = require('./routes');

const app = express();

// Apply middleware
app.use(jsonParser);
app.use(requestLogger);

// Mount routes
app.use('/', routes);

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;
