const express = require('express');
const router = express.Router();
const { helloHandler } = require('../handlers/hello');
const { healthHandler } = require('../handlers/health');
const { apiHelloHandler } = require('../handlers/apiHello');

// GET / route
router.get('/', helloHandler);

// GET /health route
router.get('/health', healthHandler);

// GET /api/hello route
router.get('/api/hello', apiHelloHandler);

module.exports = router;
