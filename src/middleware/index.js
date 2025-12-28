const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Security headers middleware (helmet)
const isProd = process.env.NODE_ENV === 'production';
const securityHeaders = helmet({
  contentSecurityPolicy: isProd ? undefined : false,
  crossOriginEmbedderPolicy: isProd ? undefined : false,
  hsts: isProd ? undefined : false
});

// CORS middleware
let corsOptions;
if (!isProd) {
  corsOptions = {
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204
  };
} else {
  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  corsOptions = {
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      cb(null, allowed.includes(origin));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204
  };
}
const corsMiddleware = cors(corsOptions);

// JSON parser middleware
const jsonParser = express.json();

// Request logger middleware
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// 404 Not Found handler middleware
const notFoundHandler = (req, res, next) => {
  const err = new Error('Route not found');
  err.status = 404;
  err.code = 'NOT_FOUND';
  next(err);
};

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  // If headers already sent, delegate to default Express error handler
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || err.statusCode || 500;
  const message = err.message || (status === 404 ? 'Not Found' : 'Internal Server Error');
  
  const body = {
    error: {
      message,
      status,
      ...(err.code && { code: err.code }),
      ...(process.env.NODE_ENV !== 'production' && err.stack && { stack: err.stack })
    }
  };

  res.status(status).json(body);
};

module.exports = {
  securityHeaders,
  corsMiddleware,
  corsOptions,
  jsonParser,
  requestLogger,
  notFoundHandler,
  errorHandler
};
