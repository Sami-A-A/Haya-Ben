const Item = require('../models/Item')
const Order = require('../models/Order')

// exports.item_create_get = (req,res) => {
//     res.json({"message": "item_create_get works"})
// }
// exports.bento_create_get = (req,res) => {
//     res.json({"message": "item_create_get works"})
// }

exports.item_create_post = (req,res) => {
    let item = new Item(req.body)
    console.log(item)
    item.save()
    .then((items)=>{
        res.json({items})
    })
    .catch((err) => {
        console.log(err)
        res.send("Error creating item. Please try again later.")
    })
}

// Might not use
exports.bento_create_post = (req,res) => {
    let item = new Item(req.body)
    item.save()
    .then((item)=>{
        res.json({item})
    })
    .catch((err) => {
        console.log(err)
        res.send("Error creating item. Please try again later.")
    })
}

exports.item_index_get = (req,res) => {
    Item.find().populate('order')
    .then(items => {
        res.json({items})    
    })
    .catch(err => {
        console.log(err)
        res.send("Error loading items. Please try again later")
    })
}


// Might not use
exports.item_details_get = (req,res) => {
    Item.findById(req.query.id).populate('order')
    .then(item => {
        res.json({item})
    })
}


exports.item_edit_get = (req,res) => {
    Item.findById(req.query.id)
    .then(item => {
        res.json({item})
    })
    .catch(err => {
        console.log(err)
        res.send("Error loading item edit form. Please try again later.")
    })
}

exports.item_update_put = (req,res) => {
    Item.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((item) => {
        res.json({item})
    })
    .catch(err => {
        console.log(err)
        res.send("Error updating item. Please try again later.")
    })
    
}

exports.item_drop_delete = (req,res) => {
    Item.findByIdAndDelete(req.query.id)
    .then((item) => {
        res.json({"message": "item_create_get works"})
    })
    .catch(err => {
        console.log(err)
        res.send('Error deleting item. Please try again later.')
    })
    
}

