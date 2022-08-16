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

const customerCheckout = async (body) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = body;
  const addSale = await sales.create(
    { 
      userId, 
      sellerId, 
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'PENDENTE',
      saleDate: new Date(),
    },
    );
  return addSale;
};

module.exports = {
  findOrdersByUserId,
  findOrdersBySellerId,
  customerCheckout,
};
