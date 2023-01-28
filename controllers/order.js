const Order = require('../models/Order')

exports.order_create_post = (req, res) => {
    res.json({"message": "order_create_post works"})
}

exports.order_index_get = (req,res) => {
    res.json({"message":"order_index_get works"})
}

exports.order_details_get = (req,res) => {
    res.json({"message": "order_details_get works"})
}

exports.order_edit_get = (req,res) => {
    res.json({"message": "order_edit_get works"})
}

exports.order_update_put = (req,res) => {
    res.json({"message": "order_update_put"})
}