const router = require('express').Router();
const { authController } = require('../controllers');
const { dashboardController } = require('../controllers/dashboard.controller.js');
const { authMiddleware } = require('../middleware')

router.post('/signup', authController.createUser)

router.get('/login', authController.loginUser)
// router.use((req,res)=>{
//     authenticateUser();
//     res.send("authenticate hai ")
// });
router.get('/dashboard', authMiddleware.authenticateUser(), dashboardController)

module.exports = router;