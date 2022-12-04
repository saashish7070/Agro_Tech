const router = require('express').Router()
const homepageCtrl = require('../controllers/homepage')

const routeApp = () => {
    router.route('/homepage',homepageCtrl.getItems)
}