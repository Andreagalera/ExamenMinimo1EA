const Bike = require ('../models/bike');
const Station = require ('../models/station')

const bikeCtrl = {};
//Get bikes
bikeCtrl.getBikes = async (req, res) => {
    const bikes = await Bike.find();
    res.json(bikes);
};

//Post bikes
bikeCtrl.postBike = async (req, res) => {
    const bike = new Bike({
        name: req.body.name,
        kms: req.body.kms,
        description: req.body.description
    })
    console.log(bike);
    try{
    await bike.save();
    res.json({
        'status': 'Bike guardado'
    });
    }
    catch(err){
        res.status(500).send(err);
            console.log(err);
    }
};


module.exports = bikeCtrl;