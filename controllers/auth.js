const User = require("../models/User")

// Token
const jwt = require("jsonwebtoken")

// Passport
let passport = require("../helper/ppConfig");

// Encrypt Password
const bcrypt = require("bcrypt");
const salt = 10;

// exports.auth_signup_get = (req,res) => {
//     res.json({"message":"auth_signup_get works"})
// }

exports.auth_signup_post = (req,res) => {
    console.log(req.body)
    let user = new User(req.body)
    let hash = bcrypt.hashSync(req.body.password, salt)
    user.password = hash

    user.save()
    .then(() => {
        res.json({"message": "User Created Succesfully"})
    })
    .catch((err) => {
        console.log(err)
        res.send("Error creating new user. Please try again later.")
    })
}

// exports.auth_signin_get = (req, res) => {
//     res.json({"message":"auth_signin_get works"})
// }

exports.auth_signin_post = async (req,res) => {
    let { emailAddress, password } = req.body
    try {
        let user = await User.findOne({ emailAddress })

        if (!user) {
            return res.json({ "message": "User Not Found"})
        }

        const isMatch = await bcrypt.compareSync(password, user.password)

        if (!isMatch) {
            return res.json({ "message": "Password does not match"})
        }
        const payload = {
            user: {
                id: user._id,
                name: user.firstName
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            { expiresIn: 36000000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token }).status(200)
            }
        )
    } catch (error) {
        res.json({ "message": "You must be logged in to access this page"})
    }
}

exports.auth_logout_get = (req,res) => {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.json({"message":"logout successful"})
    })
}