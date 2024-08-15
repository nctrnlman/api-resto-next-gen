const orderService = require("../services/orderService");

const getAllOrders = async (req, res) => {
  try {
    const { user_id, no_table, status } = req.query;

    const orders =
      user_id || no_table || status
        ? await orderService.getOrdersByParams({ user_id, no_table, status })
        : await orderService.getOrdersByParams({});

    res.sendResponse(
      "success",
      "Orders retrieved successfully",
      orders,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve orders",
      null,
      [error.message],
      500
    );
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrder(req.params.id);
    if (order) {
      res.sendResponse(
        "success",
        "Order retrieved successfully",
        order,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Order not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve order",
      null,
      [error.message],
      500
    );
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await orderService.addOrCreateOrder(req.body);
    res.sendResponse(
      "success",
      "Order processed successfully",
      order,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to process order",
      null,
      [error.message],
      500
    );
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await orderService.updateOrder(
      req.params.id,
      req.body
    );
    if (updatedOrder) {
      res.sendResponse(
        "success",
        "Order updated successfully",
        updatedOrder,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Order not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update order",
      null,
      [error.message],
      500
    );
  }
};

const deleteOrder = async (req, res) => {
  try {
    const success = await orderService.deleteOrder(req.params.id);
    if (success) {
      res.sendResponse(
        "success",
        "Order deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Order not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete order",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
