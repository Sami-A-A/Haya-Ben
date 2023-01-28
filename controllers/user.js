const User = require("../models/User")

exports.user_details_get = (req,res) => {
    res.json({"message":"user_details_get works"})
}

exports.user_update_put = (req,res) => {
    res.json({"message":"user_update_put works"})
}

exports.user_drop_delete = (req,res) => {
    res.json({"message":"user_drop_delete works"})
}