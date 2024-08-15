"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Orders", [
      {
        user_id: 1,
        total_price: "100000",
        no_table: "10",
        order_type: "dine_in",
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        total_price: "200000",
        no_table: null,
        order_type: "take_away",
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
