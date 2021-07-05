const express = require('express');
const router  = express.Router();
const raidController = require('../controllers/raid.controller');

router.get('/raids', raidController.getAll);

module.exports = router; // export to use in server.js
