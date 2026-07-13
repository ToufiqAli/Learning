const router = require('express').Router();
const orderController = require('../Controllers/orders.controller')

router('/',orderController.GetOneOrder)
router('/create',orderController.orderCreate)

module.exports = router