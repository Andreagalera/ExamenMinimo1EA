const express = require('express');
const router = express.Router();

const station = require('../controllers/stationcontroller');
router.get('/stations', station.getStations);
router.post('/stations', station.poststation);
router.put('/stations', station.putBikeStation);
router.delete('/stations', station.deleteBikeStation);
router.get('/stations/:id2', station.getInfoStation);
router.get('/stations/detail/:id', station.getInfooneStation);
router.get('/studentAllDetails', station.getnameallBikes);

const bike = require('../controllers/bikecontroller');
router.get('/bikes', bike.getBikes);
router.post('/bikes', bike.postBike);

module.exports = router;