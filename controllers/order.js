const Order = require('../models/Order')

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
    Order.find()
    .then(order => {
        res.json({orders: order})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get Order Index')
    })
}

// HTTP GET - Order Details
exports.order_details_get = (req,res) => {
    Order.findById(req.body._id)
    .then(order => {
        res.json({order})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get Order Details')
    })
}

// HTTP GET - Order Edit
exports.order_edit_get = (req,res) => {
    Order.findById(req.body._id)
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
        console.log('Cannot Update Order')
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Update Order')
    })
}