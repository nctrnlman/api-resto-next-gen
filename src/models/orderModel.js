"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_table: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order_type: {
        type: DataTypes.ENUM("dine_in", "take_away"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed"),
        defaultValue: "pending",
        allowNull: false,
      },
    },
    {}
  );
  Order.associate = function (models) {
    Order.hasMany(models.OrderDetail, { foreignKey: "order_id" });
  };
  return Order;
};
