const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const authCtrl = require('../controllers/authCtrl')
const auth = require('../config/auth');


router.get('/accesstoken',authCtrl.generateToken);
router.get('/users',auth,userCtrl.readAllUser);
router.get('/:id',auth,userCtrl.readUser);
router.put('/update/:id',auth,userCtrl.updateUser);
router.delete('/delete/:id',auth,userCtrl.deleteUser);
router.post('/signup',authCtrl.signUp);
router.post('/login',authCtrl.logIn);
router.post('/logout',authCtrl.logOut);
module.exports = router;