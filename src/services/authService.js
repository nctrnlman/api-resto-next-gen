const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

const login = async (emailOrWhatsapp, password) => {
  let user;
  if (emailOrWhatsapp.includes("@")) {
    user = await userRepository.findUserByEmail(emailOrWhatsapp);
  } else {
    user = await userRepository.findUserByWhatsapp(emailOrWhatsapp);
  }

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      no_whatsapp: user.no_whatsapp,
      role: user.role,
    },
    secretKey,
    { expiresIn: "1h" }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      no_whatsapp: user.no_whatsapp,
      role: user.role,
    },
  };
};

module.exports = {
  login,
};
