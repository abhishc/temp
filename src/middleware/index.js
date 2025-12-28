const express = require('express');

// JSON parser middleware
const jsonParser = express.json();

// Request logger middleware
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
};

module.exports = {
  jsonParser,
  requestLogger,
  errorHandler
};
