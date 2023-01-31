const Ingredient = require('../models/Ingredient')

// HTTP POST - Create Ingredient
exports.ingr_create_post = (req, res) => {
    let ingr = new Ingredient(req.body)

    ingr.save()
    .then(ingr => {
        res.json({ingr})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Create Ingredient')
    })
}

// HTTP GET -  Ingredient Index
exports.ingr_index_get = (req, res) => {
    Ingredient.find()
    .then(ingredients => {
        res.json({ingredients: ingredients});
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get Ingredient Index')
    })
}

// HTTP GET - Ingredient Edit
exports.ingr_edit_get = (req,res) => {
    Ingredient.findById(req.body._id)
    .then(ingr => {
        res.json({ingr})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get Ingredient Edit')
    })
}

// HTTP PUT - Ingredient Update
exports.ingr_update_put = (req, res) => {
    Ingredient.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(ingr => {
        res.json({ingr})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Update Ingredient')
    })
}

// HTTP DELETE - Ingredient Delete
exports.ingr_drop_delete = (req, res) => {
    Ingredient.findByIdAndDelete(req.body._id)
    .then(ingr => {
        res.json({ingr})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Delete Ingredient')
    })
}