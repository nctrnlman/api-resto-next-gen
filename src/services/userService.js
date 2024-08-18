const bcrypt = require("bcrypt");
const userRepository = require("../repositories/userRepository");
const saltRounds = 10;

const registerUser = async (name, email, password, role, no_whatsapp) => {
  const existingUserByEmail = await userRepository.findUserByEmail(email);
  if (existingUserByEmail) {
    throw new Error("Email already in use");
  }

  const existingUserByWhatsapp = await userRepository.findUserByWhatsapp(
    no_whatsapp
  );
  if (existingUserByWhatsapp) {
    throw new Error("WhatsApp number already in use");
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return await userRepository.createUser({
    name,
    email,
    password: hashedPassword,
    role,
    no_whatsapp,
  });
};

const getUserById = async (id) => {
  return await userRepository.findUserById(id);
};

const getUserByWhatsapp = async (no_whatsapp) => {
  return await userRepository.findUserByWhatsapp(no_whatsapp);
};

const getAllUsers = async () => {
  return await userRepository.findAllUsers();
};

const updateUser = async (id, name, email, password, no_whatsapp) => {
  const existingUser = await userRepository.findUserById(id);
  if (!existingUser) {
    throw new Error("User not found");
  }

  if (email !== existingUser.email) {
    const userWithEmail = await userRepository.findUserByEmail(email);
    if (userWithEmail) {
      throw new Error("Email already in use");
    }
  }

  if (no_whatsapp !== existingUser.no_whatsapp) {
    const userWithWhatsapp = await userRepository.findUserByWhatsapp(
      no_whatsapp
    );
    if (userWithWhatsapp) {
      throw new Error("WhatsApp number already in use");
    }
  }

  const userData = { name, email, no_whatsapp };
  if (password) {
    userData.password = await bcrypt.hash(password, saltRounds);
  }
  return await userRepository.updateUser(id, userData);
};

const deleteUser = async (id) => {
  return await userRepository.deleteUser(id);
};

module.exports = {
  registerUser,
  getUserById,
  getUserByWhatsapp,
  getAllUsers,
  updateUser,
  deleteUser,
};
