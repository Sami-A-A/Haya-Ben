const User = require("../models/User")

// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt");
// const salt = 10;
// let passport = require("../helper/ppConfig");

exports.auth_signup_get = (req,res) => {
    res.json({"message":"auth_signup_get works"})
}

exports.auth_signup_post = (req,res) => {
    res.json({"message":"auth_signup_post works"})
}

exports.auth_signin_get = (req, res) => {
    res.json({"message":"auth_signin_get works"})
}

exports.auth_signin_post = (req,res) => {
    res.json({"message":"auth_signin_post works"})
}

exports.auth_logout_get = (req,res) => {
    res.json({"message":"auth_logout_get works"})
}