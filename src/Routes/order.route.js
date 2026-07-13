const router = require('express').Router();
const orderController = require('../Controllers/orders.controller')

router.get('/:orderId',orderController.GetOneOrder)
router.post('/create',orderController.orderCreate)

module.exports = router