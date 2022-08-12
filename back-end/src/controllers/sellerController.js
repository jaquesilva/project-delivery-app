const salesService = require('../services/salesService');

const sellerOrders = async (req, res, next) => {
  try {
    const { id: sellerId } = req.params;
    
    const orders = await salesService.findOrdersBySellerId(sellerId);

    if (orders.message) {
      res.status(409).json(orders.message);
    }

    return res.status(201).json(orders);
  } catch (erro) {
    next(erro);
  }
};

module.exports = {
  sellerOrders,
};