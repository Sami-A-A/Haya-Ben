const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    status: {
        type: String,
        default: 'Pending'
    },
    item: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    location: String,
    totalAmount: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})


const Order = mongoose.model("Order", orderSchema)

module.exports = Order