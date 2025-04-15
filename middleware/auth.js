const jwt = require("jsonwebtoken")
require("dotenv").config();


function authenticateUser(req, res, next) {
    console.log("hellow")
    console.log(req);
    const token = req.accesstoken;
    if(token === null) return res.status(401);
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=> {
        if(err) return res.status(498).json({message : 'No longer valid'});
        req.user = user;
        next();
    })
  
}

module.exports = {
    authenticateUser
};