const { products: Products } = require('../database/models');

const findAll = async () => {
  const getProducts = await Products.findAll();

  if (!getProducts) {
    return { message: 'Nenhum produto encontrado' };
  }
  return getProducts;
};

module.exports = {
  findAll,
};
