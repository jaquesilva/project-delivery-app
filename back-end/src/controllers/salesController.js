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

const customerCheckout = async (req, res, next) => {
  try {
    const addSale = await salesService.customerCheckout(req.body);
    
    if (!addSale) {
      return res.status(401).json({ message: 'Sale already exists' });
    }

    return res.status(201).json({ message: 'Created' });
  } catch (erro) {
    next(erro);
  }
};

module.exports = {
  customerSalesOrders,
  customerCheckout,
};
