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

//Put in station bike
stationCtrl.putBikeStation= async (req, res) => {
    const stationId = req.body.stationId;
    const bikeId = req.body.bikeId;
    let stationUpdated = await Station.findOneAndUpdate({_id: stationId}, {$addToSet: {bike: bikeId}});
    res.status(200).send({message: "Bike added successfully to the station"})
};

//Delete in station bike 
stationCtrl.deleteBikeStation= async (req, res) => {
    const stationId = req.body.stationId;
    const bikeId = req.body.bikeId;
    let stationDeleted = await Station.findOneAndDelete({_id: stationId}, {$addToSet: {bike: bikeId}});
    res.status(200).send({message: "Bike delete successfully to the station"})
};

//Get info de una stacion

//Get info de una estacion populate


module.exports = stationCtrl;
