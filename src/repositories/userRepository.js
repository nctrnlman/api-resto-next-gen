const db = require("../models");
const User = db.User;

const createUser = async (userData) => {
  return await User.create(userData);
};

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const findUserByWhatsapp = async (no_whatsapp) => {
  return await User.findOne({ where: { no_whatsapp } });
};

const findUserById = async (id) => {
  return await User.findByPk(id);
};

const findAllUsers = async () => {
  return await User.findAll({
    order: [["name", "ASC"]],
  });
};

const updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.update(userData);
  }
  return null;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
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
