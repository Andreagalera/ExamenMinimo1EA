const mongoose = require('mongoose');
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
    try{
        const stationId = req.params.stationId;
        const bikeId = req.params.bikeId;

        console.log(`StationID: ${stationId}, BikeID: ${bikeId}`);

        let station = await Station.findById(stationId);
        if(!station){
           
            return res.status(404).send({message: 'Station not found'})
        }else{
            console.log(bikeId);
            mongoose.Types.ObjectId(bikeId);
            console.log(bikeId);
            let stationUpdated = await Station.update({_id: stationId}, {$pull: {bike: bikeId}});
            console.log(stationUpdated);
            console.log("Station" +stationId);
            console.log("Bike" +bikeId);

            if (stationUpdated.nModified === 0) {
                return res.status(404).send({message: 'Bike not found'})
            }

            let bikeUpdated = await Bike.findByIdAndUpdate({_id: bikeId}, {assigned: "false"});
            console.log(bikeUpdated);
        }
        res.status(200).send({message:'Bici borrada'});
    }catch(err){
        res.status(500).send(err)
    } 
}

//Get info de una stacion
stationCtrl.getInfooneStation=  async (req, res) => {
    console.log(req.params.id);
    const station = await Station.findById(req.params.id);
    res.json(station);

}

//Get info de una estacion populate
stationCtrl.getInfoStation =  async (req, res) => {
    try {
        console.log(req.params.id);
        const _id = req.params.id;
        let station = await Station.findById(_id).populate('bike');
        if(!station){
            return res.status(404).send({message: 'Station not found'})
        }else{
            res.status(200).send(station)
        }
    } catch(err) {
        res.status(500).send(err)
    }
}


//Ver estudiantes todas subjects
stationCtrl.getnameallBikes =  async (req, res) => {
    const bikes = await Station.find().populate('bike');
    res.json(bikes);
        
}

module.exports = stationCtrl;


