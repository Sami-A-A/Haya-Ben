const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = (req,res,next) => {

    let token = ""
    var authorizationToken = req.header("Authorization")
    
    if(authorizationToken){
        authorizationToken = authorizationToken.replace("Bearer ", "")
        token = authorizationToken
    }
    
    if(!token){
        return res.status(401).json({"message":"Not Authorized"})
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded.user
        next()
    } catch (error) {
        return res.status(401).json({"message":"Invalid token"})
    }
}