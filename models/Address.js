const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
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

const Address = mongoose.model('Address', addressSchema)
module.exports = Address