"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order", // Model name
    {
      id: {
        type: DataTypes.INTEGER, // Data type for the ID
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER, // Data type for user ID
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      total_price: {
        type: DataTypes.STRING, // Data type for total price
        allowNull: false,
      },
      no_table: {
        type: DataTypes.STRING, // Data type for table number
        allowNull: true,
      },
      order_type: {
        type: DataTypes.ENUM("dine_in", "take_away"), // Enum for order type
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed"), // Enum for order status
        defaultValue: "pending",
        allowNull: false,
      },
    },
    {}
  );
  Order.associate = function (models) {
    Order.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    Order.hasMany(models.OrderDetail, { foreignKey: "order_id" });
  };
  return Order;
};
