const Order = require('../models/Order')
const Item = require('../models/Item')
const moment = require('moment')

// HTTP GET - Order Create
exports.order_create_post = (req, res) => {
    let order = new Order(req.body)
    console.log(req.body)

    order.save()
    .then(order => {
        res.json({order})
        // console.log(req.body)
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Create Order')
    })
}

// HTTP GET - Order Index (History)
exports.order_index_get = (req,res) => {
    Order.find().populate('items').populate('user')
    .then(orders => {
        res.json({orders, moment})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get Order Index')
    })
}

// HTTP GET - Order Details
exports.order_details_get = (req,res) => {
    Order.findById(req.query.id).populate('items').populate('user')
    .then(order => {
        res.json({order, moment})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get Order Details')
    })
}

// HTTP GET - Order Edit
exports.order_edit_get = (req,res) => {
    Order.findById(req.query.id).populate('items')
    .then(order => {
        res.json({order})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get Order Edit')
    })
}

// HTTP PUT - Order Update
exports.order_update_put = (req,res) => {
    Order.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(order => {
        res.json({order})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Update Order')
    })
}