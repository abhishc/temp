const express = require('express');
const router = express.Router();
const { helloHandler } = require('../handlers/hello');
const { healthHandler } = require('../handlers/health');

// GET / route
router.get('/', helloHandler);

// GET /health route
router.get('/health', healthHandler);

module.exports = router;
