const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserByToken,
  getUserByWhatsapp,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Route to get all users
router.get("/", authMiddleware, getUsers);

// Route to get the current user by token
router.get("/token", authMiddleware, getUserByToken);

// Route to get a user by their WhatsApp number
router.get("/whatsapp/:no_whatsapp", authMiddleware, getUserByWhatsapp);

// Route to get a user by ID
router.get("/:id", authMiddleware, getUser);

// Route to update a user by ID
router.put("/:id", authMiddleware, updateUser);

// Route to delete a user by ID
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
