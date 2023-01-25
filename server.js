const express = require('express')
const app = express()
const mongoose = require('mongoose')

// env
require ("dotenv").config()
const port = process.env.PORT

// Secret
app.use(session())
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 900000}
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





// Mounting Routes





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