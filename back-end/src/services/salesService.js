const { sales, SalesProducts, products, User } = require('../database/models');

const findOrdersByUserId = async (userId) => {
  const getOrders = await sales.findAll({ where: { userId } });

  if (!getOrders) {
    return { message: 'Nenhuma venda' };
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
      status: 'Pendente',
      saleDate: new Date(),
    },
    );

    await Promise.all(
      buyProducts.map(async ({ id, quantity }) => {
        const { id: saleId } = addSale;

        await SalesProducts.create({ saleId, productId: id, quantity });
      }),
    );

  return addSale;
};

const getBySaleId = async (saleId) => {
  const getSales = await SalesProducts.findAll({ where: { saleId }, 
    include: [
      {
        model: products,
        as: 'product',
        attributes: ['name'], as: 'productName',
      },
    ],
  });

  if (!getSales) {
    return { message: 'Nenhuma venda encontrada' };
  }

  return getSales;
};

module.exports = {
  findOrdersByUserId,
  findOrdersBySellerId,
  customerCheckout,
  getBySaleId,
};
