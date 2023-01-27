const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    ingredients: String,
    imageURL: String,
    order: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {timestamps: true})

const Item = mongoose.model("Item", itemSchema)
module.exports = Item