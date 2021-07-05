const express = require('express');
const router  = express.Router();
const raidController = require('../controllers/raid.controller');

router.get('/raid', raidController.getAll);

module.exports = router; // export to use in server.js
