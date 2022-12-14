"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sales",
      [
        {
          id: 1,
          user_id: 3,
          seller_id: 1,
          total_price: 11.11,
          delivery_address: "Rua de entrega 01",
          delivery_number: "111",
          sale_date: "01/01/22",
          status: "ENTREGUE",
        },
        {
          id: 2,
          user_id: 3,
          seller_id: 1,
          total_price: 22.22,
          delivery_address: "Rua de entrega 02",
          delivery_number: "222",
          sale_date: "02/02/22",
          status: "PREPARANDO",
        },
        {
          id: 3,
          user_id: 3,
          seller_id: 1,
          total_price: 33.33,
          delivery_address: "Rua de entrega 03",
          delivery_number: "333",
          sale_date: "03/03/22",
          status: "ENTREGUE",
        },
        {
          id: 4,
          user_id: 2,
          seller_id: 2,
          total_price: 44.44,
          delivery_address: "Rua de entrega 04",
          delivery_number: "444",
          sale_date: "04/04/22",
          status: "ENTREGUE",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
