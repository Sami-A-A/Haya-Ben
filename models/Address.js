const mongoose = require('mongoose');

const adressSchema = mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    addressName: String,
    flat: String,
    road: String,
    building: String,
    area: String,
    additionalDetails: String
})

const Address = mongoose.model('Address', adressSchema)
module.exports = Address