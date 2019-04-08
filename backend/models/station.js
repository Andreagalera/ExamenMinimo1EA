const mongoose = require('mongoose');
const {Schema} = mongoose;

const StationSchema = new Schema({
    name: { type: String, required: true },
    state: { type: String, required: true },
    description: { type: String, required: true },
    bike:  [{type: Schema.ObjectId, ref: 'Bike', unique: false, required: false }]


})
module.exports = mongoose.model('Station', StationSchema);