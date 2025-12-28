const express = require('express');
const router = express.Router();
const { helloHandler } = require('../handlers/hello');

// GET / route
router.get('/', helloHandler);

module.exports = router;
