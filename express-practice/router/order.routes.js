const express = require('express');
const getAllOrdersController = require('../controller/getAllOrders.controller');
const createOrderController = require('../controller/createOrder.controller');
const router = express.Router();

router.get('/all', getAllOrdersController);
router.post('/', createOrderController);
module.exports = router;
