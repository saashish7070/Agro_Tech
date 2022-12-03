const router = require('express').Router()
const homepageCtrl = require('../controllers/homepage')

const routeApp = () => {
    router.get('/homepage',homepageCtrl)
}