const salesService = require('../services/salesService');

const customerSalesOrders = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const salesById = await salesService.getBySaleId(id);

    if (salesById.message) {
      res.status(409).json(salesById.message);
    }

    return res.status(201).json(salesById);
  } catch (erro) {
    next(erro);
  }
};

const getByUserId = async (req, res, next) => {
  try {
    const { userId } = req.body;

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

    return res.status(201).json(addSale);
  } catch (erro) {
    next(erro);
  }
};

module.exports = {
  customerSalesOrders,
  getByUserId,
  customerCheckout,
};
