"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define(
    "OrderDetail",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_price: {
        type: DataTypes.STRING,
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
