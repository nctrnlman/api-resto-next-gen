const orderService = require("../services/orderService");

// Fungsi untuk mengambil semua pesanan
const getAllOrders = async (req, res) => {
  try {
    const { user_id, no_table, status } = req.query;

    // Jika ada parameter pencarian, ambil pesanan berdasarkan parameter tersebut; jika tidak, ambil semua pesanan
    const orders =
      user_id || no_table || status
        ? await orderService.getOrdersByParams({ user_id, no_table, status })
        : await orderService.getOrdersByParams({});

    // Mengirimkan respon berhasil dengan daftar pesanan
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

// Fungsi untuk mengambil pesanan berdasarkan ID
const getOrderById = async (req, res) => {
  try {
    // Mengambil pesanan berdasarkan ID dari parameter URL
    const order = await orderService.getOrder(req.params.id);
    if (order) {
      // Jika pesanan ditemukan, mengirimkan respon berhasil
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

// Fungsi untuk membuat pesanan baru
const createOrder = async (req, res) => {
  try {
    // Mengambil data pesanan dari body permintaan dan memanggil layanan untuk membuat pesanan
    const order = await orderService.addOrCreateOrder(req.body);

    // Mengirimkan respon berhasil
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

// Fungsi untuk memperbarui pesanan berdasarkan ID
const updateOrder = async (req, res) => {
  try {
    // Mengambil ID pesanan dari parameter dan data baru dari body permintaan
    const updatedOrder = await orderService.updateOrder(
      req.params.id,
      req.body
    );
    if (updatedOrder) {
      // Jika pesanan berhasil diperbarui, mengirimkan respon berhasil
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

// Fungsi untuk menghapus pesanan berdasarkan ID
const deleteOrder = async (req, res) => {
  try {
    // Memanggil layanan untuk menghapus pesanan berdasarkan ID
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
