const allOrders = require('../data/orders');
module.exports = (req, res) => {
  return res.status(200).json({
    message: 'Success',
    data: allOrders,
  });
};
