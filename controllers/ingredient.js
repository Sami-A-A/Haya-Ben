const Ingredient = require('../models/Ingredient')

exports.ingr_create_post = (req, res) => {
    res.json({"message": "ingr_create_post is working"})
}

exports.ingr_index_get = (req, res) => {
    res.json({"message": "ingr_index_get is working"})
}

exports.ingr_details_get = (req, res) => {
    res.json({"message": "ingr_detail_get is working"})
}

exports.ingr_edit_get = (req,res) => {
    res.json({"message": "ingr_edit_get is working"})
}

exports.ingr_update_put = (req, res) => {
    res.json({"message": "ingr_update_put is working"})
}

exports.ingr_drop_delete = (req, res) => {
    res.json({"message": "ingr_delete_get is working"})
}