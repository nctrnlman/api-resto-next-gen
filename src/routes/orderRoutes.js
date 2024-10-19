const express = require("express");
const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to get all orders
router.get("/", getAllOrders);

// Route to get a specific order by ID
router.get("/:id", getOrderById);

// Route to create a new order (authentication required)
router.post("/", authMiddleware, createOrder);

// Route to update an existing order by ID (authentication required)
router.put("/:id", authMiddleware, updateOrder);

// Route to delete an order by ID (authentication required)
router.delete("/:id", authMiddleware, deleteOrder);

module.exports = router;
