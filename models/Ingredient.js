const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    item: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    imageURL: String
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema)
module.exports = Ingredient