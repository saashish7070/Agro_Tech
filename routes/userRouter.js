const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');

router.get('/users',userCtrl.readAllUser);
router.post('/create',userCtrl.createUser);
router.get('/:id',userCtrl.readUser);
router.patch('/update/:id',userCtrl.updateUser);
router.delete('/delete/:id',userCtrl.deleteUser);

module.exports = router;