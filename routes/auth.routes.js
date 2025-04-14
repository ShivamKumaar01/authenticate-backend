const router = require('express').Router();
const{authController}=require('../controllers')


router.get('/login',authController.loginUser)

router.post('/signup',authController.createUser)
module.exports = router;