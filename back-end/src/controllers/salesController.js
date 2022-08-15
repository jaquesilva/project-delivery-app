const salesService = require('../services/salesService');

const customerSalesOrders = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const salesOrders = await salesService.findOrdersByUserId(userId);

    if (salesOrders.message) {
      res.status(409).json(salesOrders.message);
    }

    return res.status(201).json(salesOrders);
  } catch (erro) {
    next(erro);
  }
};

module.exports = {
  customerSalesOrders,
};
