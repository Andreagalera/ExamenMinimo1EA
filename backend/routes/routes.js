const express = require('express');
const router = express.Router();

const station = require('../controllers/stationcontroller');
router.get('/stations', station.getStations);
router.post('/stations', station.poststation);
module.exports = router;