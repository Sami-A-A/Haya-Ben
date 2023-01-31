const User = require("../models/User")
const Address = require("../models/Address")
const Order = require("../models/Order")
const { findById } = require("../models/User")

// // TEMP HTTP POST - User Create
// exports.user_create_post = (req, res) => {
//     let user = new User(req.body)
    
//     user.save()
//     .then(user => {
//         res.json({user})
//     })
//     .catch(err => {
//         console.log(err)
//         console.log('Cannot Create User')
//     })
// }

// HTTP GET - User Create
exports.user_create_post = (req,res) => {
    let user = new User(req.body)
    user.save()
    .then(user => {
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Create User')
    })
}

// HTTP GET - User Details
exports.user_details_get = (req,res) => {
    console.log(req.query.id)
    User.findById(req.query.id).populate('addresses').populate('orderHistory')
    // .exec((err, results) => {
    //     console.log(err)
    //     console.log(results)
    // })
    .then(user => {
        console.log(user)
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get User Details')
    })
}

exports.user_index_get = (req,res) => {
    User.find()
    .then((users)=>{
        res.json({users})
    })
    .catch(err => {
        console.log(err)
        console.log('Could not get all users')
    })
}
// HTTP GET - User Edit
exports.user_edit_get = (req,res) => {
    User.findById(req.query.id).populate('orderHistory')
    .then(user => {
        console.log(user)
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Get User Details')
    })
}


// HTTP PUT - User Update
exports.user_update_put = (req,res) => {
    User.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(user => {
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Update User')
    })
}


// HTTP DELETE - User Delete
exports.user_drop_delete = (req,res) => {
    User.findByIdAndDelete(req.query.id)
    .then(user => {
        res.json({user})
    })
    .catch(err => {
        console.log(err)
        console.log('Cannot Delete User')
    })
}