const db = require("../models");
const { Order, OrderDetail, Product, User } = db;

// Fetch orders based on parameters: user_id, no_table, and status
const getOrdersByParams = async ({ user_id, no_table, status }) => {
  const whereConditions = {};
  if (user_id) whereConditions.user_id = user_id; // Add user_id to conditions if provided
  if (no_table) whereConditions.no_table = no_table; // Add no_table to conditions if provided
  if (status) whereConditions.status = status; // Add status to conditions if provided

  return Order.findAll({
    where: whereConditions, // Conditions for the query
    include: [
      {
        model: OrderDetail,
        include: [Product], // Include associated products in the order details
      },
      {
        model: User,
        as: "user", // Alias for the user association
        attributes: ["id", "name", "email"], // Specify user attributes to include
        required: false, // User information is optional
      },
    ],
    order: [["createdAt", "DESC"]], // Order results by creation date, descending
  });
};

// Fetch a pending order based on user_id and table number
const getPendingOrder = async (user_id, no_table) => {
  return Order.findOne({
    where: {
      user_id: user_id,
      no_table: no_table,
      status: "pending", // Only fetch orders with status "pending"
    },
    include: [OrderDetail], // Include order details
  });
};

// Create a new order with associated order details
const createOrder = (data) => Order.create(data, { include: [OrderDetail] });

// Update the status of an existing order
const updateOrderStatus = (orderId, status) =>
  Order.findByPk(orderId).then((order) => {
    if (order) {
      return order.update({ status }); // Update the order's status
    }
    return null;
  });

// Create new order details for an order
const createOrderDetails = async (details) => {
  const detailsArray = Array.isArray(details) ? details : [details]; // Ensure details are in an array

  return Promise.all(
    detailsArray.map((detail) => {
      return OrderDetail.create({
        order_id: detail.order_id, // Associate with the order
        product_id: detail.product_id, // Associate with the product
        quantity: detail.quantity,
        product_price: detail.product_price,
      });
    })
  );
};

// Update the quantity of a specific order detail
const updateOrderDetailQuantity = (orderDetailId, quantity) =>
  OrderDetail.findByPk(orderDetailId).then((orderDetail) => {
    if (orderDetail) {
      return orderDetail.update({ quantity }); // Update the quantity
    }
    return null;
  });

// Update the total price of an order
const updateOrderTotalPrice = (orderId, newTotalPrice) =>
  Order.findByPk(orderId).then((order) => {
    if (order) {
      return order.update({ total_price: newTotalPrice }); // Update the total price
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
