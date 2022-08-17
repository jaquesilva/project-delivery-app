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
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, buyProducts } = body;
  const addSale = await sales.create(
    { userId, 
      sellerId, 
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'PENDENTE',
      saleDate: new Date(),
    },
    );

    await Promise.all(
      buyProducts.map(async ({ id, quantity }) => {
        const { id: saleId } = addSale;
        await sales.create({ saleId, productId: id, quantity });
      }),
    );

  return addSale;
};

module.exports = {
  findOrdersByUserId,
  findOrdersBySellerId,
  customerCheckout,
};
