const db = require("../models");
const User = db.User;

// Create a new user in the database
const createUser = async (userData) => {
  return await User.create(userData); // Create and return the user
};

// Find a user by their email address
const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } }); // Return user matching the email
};

// Find a user by their WhatsApp number
const findUserByWhatsapp = async (no_whatsapp) => {
  return await User.findOne({ where: { no_whatsapp } }); // Return user matching the WhatsApp number
};

// Find a user by their ID
const findUserById = async (id) => {
  return await User.findByPk(id); // Return user matching the primary key (ID)
};

// Retrieve all users, ordered by name
const findAllUsers = async () => {
  return await User.findAll({
    order: [["name", "ASC"]], // Order users by name in ascending order
  });
};

// Update a user's data by their ID
const updateUser = async (id, userData) => {
  const user = await User.findByPk(id); // Find user by ID
  if (user) {
    return await user.update(userData); // Update and return the user if found
  }
  return null;
};

// Delete a user by their ID
const deleteUser = async (id) => {
  const user = await User.findByPk(id); // Find user by ID
  if (user) {
    await user.destroy(); // Destroy the user if found
    return true;
  }
  return false;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByWhatsapp,
  findUserById,
  findAllUsers,
  updateUser,
  deleteUser,
};
