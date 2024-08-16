const db = require("../models");
const { Order, OrderDetail, Product, User } = db;

const getOrdersByParams = async ({ user_id, no_table, status }) => {
  const whereConditions = {};
  if (user_id) whereConditions.user_id = user_id;
  if (no_table) whereConditions.no_table = no_table;
  if (status) whereConditions.status = status;

  return Order.findAll({
    where: whereConditions,
    include: [
      {
        model: OrderDetail,
        include: [Product],
      },
      {
        model: User,
        as: "user",
        attributes: ["id", "name", "email"],
        required: false,
      },
    ],
    order: [["createdAt", "DESC"]],
  });
};

const getPendingOrder = async (user_id, no_table) => {
  return Order.findOne({
    where: {
      user_id: user_id,
      no_table: no_table,
      status: "pending",
    },
    include: [OrderDetail],
  });
};

const createOrder = (data) => Order.create(data, { include: [OrderDetail] });

const updateOrderStatus = (orderId, status) =>
  Order.findByPk(orderId).then((order) => {
    if (order) {
      return order.update({ status });
    }
    return null;
  });

const createOrderDetails = async (details) => {
  const detailsArray = Array.isArray(details) ? details : [details];

  return Promise.all(
    detailsArray.map((detail) => {
      return OrderDetail.create({
        order_id: detail.order_id,
        product_id: detail.product_id,
        quantity: detail.quantity,
        product_price: detail.product_price,
      });
    })
  );
};

const updateOrderDetailQuantity = (orderDetailId, quantity) =>
  OrderDetail.findByPk(orderDetailId).then((orderDetail) => {
    if (orderDetail) {
      return orderDetail.update({ quantity });
    }
    return null;
  });

const updateOrderTotalPrice = (orderId, newTotalPrice) =>
  Order.findByPk(orderId).then((order) => {
    if (order) {
      return order.update({ total_price: newTotalPrice });
    }
    return null;
  });

module.exports = {
  getOrdersByParams,
  getPendingOrder,
  createOrder,
  updateOrderStatus,
  createOrderDetails,
  updateOrderDetailQuantity,
  updateOrderTotalPrice,
};
