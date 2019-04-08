const Bike = require ('../models/bike');
const Station = require ('../models/station')

const stationCtrl = {};

//Get stations
stationCtrl.getStations = async (req, res) => {
    const stations = await Station.find();
    res.json(stations);
};

 //Post station
 stationCtrl.poststation = async (req, res) => {
    const station = new Station({
        name: req.body.name,
        state: req.body.state,
        description: req.body.description
    })
    console.log(station);
    try{
    await station.save();
    res.json({
        'status': 'Station guardado'
    });
    }
    catch(err){
        res.status(500).send(err);
            console.log(err);
    }
};

module.exports = stationCtrl;
