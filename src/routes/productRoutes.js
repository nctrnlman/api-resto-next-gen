const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");

// Route to get all products
router.get("/", getProducts);

// Route to get a specific product by ID
router.get("/:id", authMiddleware, getProduct);

// Route to create a new product
router.post("/", authMiddleware, createProduct);

// Route to update an existing product by ID
router.put("/:id", authMiddleware, updateProduct);

// Route to delete a product by ID
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
