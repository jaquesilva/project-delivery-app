const { sales } = require('../database/models');

const findOrdersByUserId = async (userId) => {
  const getOrders = await sales.findAll({ where: { userId } });

  if (!getOrders) {
    return { message: 'Nenhuma venda encontrada' };
  }

  return getOrders;
};

const findOrdersBySellerId = async (sellerId) => {
  const getOrders = await sales.findAll({ where: { sellerId } });

  if (!getOrders) {
    return { message: 'Nenhuma venda encontrada' };
  }

  return getOrders;
};

module.exports = {
  findOrdersByUserId,
  findOrdersBySellerId,
};
