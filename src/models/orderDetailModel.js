"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define(
    "OrderDetail", // Model name
    {
      id: {
        type: DataTypes.INTEGER, // Data type for the ID
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER, // Data type for order ID
        references: {
          model: "Orders",
          key: "id",
        },
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER, // Data type for product ID
        references: {
          model: "Products",
          key: "id",
        },
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER, // Data type for quantity of the product
        allowNull: false,
      },
      product_price: {
        type: DataTypes.STRING, // Data type for product price
        allowNull: false,
      },
    },
    {}
  );
  OrderDetail.associate = function (models) {
    OrderDetail.belongsTo(models.Order, { foreignKey: "order_id" });
    OrderDetail.belongsTo(models.Product, { foreignKey: "product_id" });
  };
  return OrderDetail;
};
