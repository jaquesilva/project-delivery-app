const custumerService = require('../services/customerService');

const customerProducts = async (req, res, next) => {
  try {
    const products = await custumerService.findAll();
    // console.log('controler okk');

    if (products.message) {
      res.status(409).json(products.message);
    }

    return res.status(201).json(products);
  } catch (erro) {
    next(erro);
  }
};

module.exports = {
  customerProducts,
};
