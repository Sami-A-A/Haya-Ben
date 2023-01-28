const express = require('express')
const app = express()
const mongoose = require('mongoose')
let session = require('express-session');

// env
require ("dotenv").config()
const port = process.env.PORT

// Session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 1209600}
}))


// Initialize

// app.use(express.static("public"))
// app.use(expressLayouts)
// app.use(passport.initialize())
// app.use(function(req, res, next){
//     res.locals.currentUser = req.user
//     next()
// })



// Import Routes
const authRoute = require('./routes/auth');
// const userRoute = require('./routes/user')
const orderRoute = require('./routes/order');
const itemRoute = require('./routes/item');
const ingredientRoute = require('./routes/ingredient');

// Mounting Routes
app.use('/', authRoute);
//const userRoute = require('./routes/user')
app.use('/', orderRoute);
app.use('/', itemRoute);
app.use('/', ingredientRoute)


// Database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected Successfully")
    }
)

// Render Home
app.get('/', function(req,res){
    res.send("App")
})


// Port
app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Running on Port ${port}`)
} )