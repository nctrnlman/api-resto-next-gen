const express = require("express");
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to get all categories
router.get("/", getAllCategories);

// Route to get a specific category by ID (authentication required)
router.get("/:id", authMiddleware, getCategoryById);

// Route to create a new category (authentication required)
router.post("/", authMiddleware, createCategory);

// Route to update an existing category by ID (authentication required)
router.put("/:id", authMiddleware, updateCategory);

// Route to delete a category by ID (authentication required)
router.delete("/:id", authMiddleware, deleteCategory);

module.exports = router;
