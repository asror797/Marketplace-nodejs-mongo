const express = require('express')
const router = express.Router()
const marketModel = require('./markets/market')


router.get('/m',marketModel.GET)


module.exports = router;