const mongoose = require('mongoose');
const {Schema} = mongoose;

const BikeSchema = new Schema({
    name: { type: String, required: true},
    kms: { type: String, required: true},
    description: { type: String, required: true},
    assigned: { type: Boolean, required: true, unique: false }
});

module.exports = mongoose.model('Bike', BikeSchema);