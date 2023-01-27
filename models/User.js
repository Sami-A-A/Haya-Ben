const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    category: String,
    firstName: {
        type: String,
        require: true,
        minlength: [2, "Name needs to be 2 or more characters"],
        maxlength: [30, "Name needs to be less than 30 characters"]
    },
    lastName: {
        type: String,
        require: true,
        minlength: [2, "Name should be 2 or more characters"],
        maxlength: [30, "Name cannot exceed 30 characters"]
    },
    username: {
        type: String,
        require: true,
        unique: true,
        minlength: [6, "Username should be 6 or more characters"],
        maxlength: [15, "Username cannot exceed 15 characters"]
    },
    emailAddress: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minlength: [8, "Password is too weak"],
    },
    contact: {
        type: String,
        require: true,
        unique: true
    },
    address: [{
        addressName: {
            type: String,
            require: true,
            minlength: 2,
            maxlength: 30
        },
        flat: Number,
        road: Number,
        building: Number,
        area: {
            type: String,
            require: true,
            maxlength: 30
        },
        additionalDetails: {
            type: String,
            maxlength: 200
        },
    }],
    orderHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    cart: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        },
        total: Number
    }]
}, {timestamps: true})


const User = mongoose.model("User", userSchema)

module.exports = User