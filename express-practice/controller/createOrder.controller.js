const Order = require('../models/order');
const allOrders = require('../data/orders');
module.exports = (req, res) => {
  const newOrder = new Order(req.body);
  allOrders.push(newOrder);
  return res.status(200).json({
    message: 'Success',
    data: newOrder,
  });
};
