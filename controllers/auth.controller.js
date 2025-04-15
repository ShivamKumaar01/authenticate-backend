const { User, Sequelize } = require("./../models");
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken');
require("dotenv").config();

// creating new user
exports.createUser = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).send({
            success: false,
            message: "content can't be empty",
        });
    }
    let existeduser = User.findOne({ where: { email: req.body.email } });
    if (!existeduser) {
        return res.status(409).json({
            success: false,
            message: "user already exist"
        })
    }

    try {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const user = new User(newUser);
        const data = await user.save();
        // let data = await User.create(newUser);
        return res.status(201).json({
            success: true,
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message || error,
        });
    }
};

// login user
exports.loginUser = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            success: false,
            message: "Bhai email id and password to enter karo",
        });  
    }
    let existUser = await User.findOne({ where: { email: req.body.email } });
   
    if (!existUser) {
        return res.status(404).send({
            success: false,
            message: "user not found"
        })
    }
    try {
         // match the password and if password match redirect to dashboard else send error
        // console.log("ye hai data",existUser)
        if(existUser.dataValues.password===req.body.password){
            // return res.status(201).send({
            //     success:true,
            //     message:"your are logged in bro"
            // })/
        console.log("ab token print krna hai")
        const token = jwt.sign({ id: User.id },process.env.JWT_SECRET_KEY, {
            expiresIn:process.env.EXPIRE_TIME
        });
        console.log(token);
   
        res.status(200).send({
            id: User.id,
            name: User.name,
            email: User.email,
            accessToken: token,
        });
           
        }
        
    }
    catch (error) {
        console.log(error)
    }
}