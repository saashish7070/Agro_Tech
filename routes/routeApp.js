const router = require('express').Router()
const homepageCtrl = require('../controllers/homepageCtrl')

const routeApp = () => {
    router.route('/homepage',homepageCtrl.getItems)
}
module.exports = routeApp;