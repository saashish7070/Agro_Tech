const router = require('express').Router()
const homepageCtrl = require('../controllers/homepageCtrl')
const userCtrl = require('../controllers/userCtrl')
const userRouter = require('./userRouter')

router.get('/',homepageCtrl.getItems)
router.use('/user',userRouter);


module.exports = router;