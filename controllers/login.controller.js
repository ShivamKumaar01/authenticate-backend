// const { User, Sequelize } = require("./../models");
// const Op = Sequelize.Op;
// let self = {};

// self.findByEmail=async(req,res)=>{
//     if (!req.body.email ||!req.body.password) {
//         return res.status(400).send({
//           success: false,
//           message: "Bhai email id and password to enter karo",
//         });
//       }
//       try{
//         const exist=User.findByEmail(req.params.email);
//         if(!exist){
//             return res.status(404).send({
//                 success:false,
//                 message:"user not found"
//             })
//         }
//         else{
//             // match the password and if password match redirect to dashboard else send error
//         }
//       }
//       catch(error){

//       }
// }
// module.exports = self;