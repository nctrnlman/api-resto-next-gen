"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("OrderDetails", [
      {
        order_id: 1,
        product_id: 1,
        quantity: 2,
        product_price: "50000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 2,
        quantity: 1,
        product_price: "200000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("OrderDetails", null, {});
  },
};
