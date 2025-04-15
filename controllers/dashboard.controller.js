const { authController } = require(".");
const{authenticateUser}=require('../middleware/auth.js')
const { User, Sequelize } = require("./../models");
exports.dashboardHandler=(req,res,)=>{
    res.send("your are on the dashboard");
}


