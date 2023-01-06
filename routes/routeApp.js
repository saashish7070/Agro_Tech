const router = require('express').Router();
const homepageCtrl = require('../controllers/homepageCtrl');
// const userRouter = require('./userRouter');
// const authRouter = require('./authRouter');

router.get('/',homepageCtrl.getItems)
// router.use('/user',userRouter);
// router.use('/auth',authRouter);

module.exports = router;