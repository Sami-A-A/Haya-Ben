const express = require('express')
const app = express()
const mongoose = require('mongoose')
let session = require('express-session')
let passport = require('./helper/ppConfig');

// env
require ("dotenv").config()
const port = process.env.PORT

// Passport and Session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 1209600}
}))

app.use(passport.initialize());
app.use(passport.session());

// Current User
app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})

// Public
app.use(express.static("public"))


// Import Routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user')
const orderRoute = require('./routes/order');
const itemRoute = require('./routes/item');
const ingredientRoute = require('./routes/ingredient');

// Mounting Routes
app.use('/', authRoute);
app.use('/', userRoute)
app.use('/', orderRoute);
app.use('/', itemRoute);
app.use('/', ingredientRoute)


// Database
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.mongoDBURL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`MongoDB Connected Successfully`))
    .catch(err=>console.log(err))


// Render Home
app.get('/', function(req,res){
    res.send("App")
})


// Port
app.listen(port || 5000, ()=> {
    console.log(`Running on Port ${port}`)
} )