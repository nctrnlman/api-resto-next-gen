const authService = require("../services/authService");
const userService = require("../services/userService");

const register = async (req, res) => {
  try {
    const { name, email, password, role, no_whatsapp } = req.body;
    const user = await userService.registerUser(
      name,
      email,
      password,
      role,
      no_whatsapp
    );
    res.sendResponse(
      "success",
      "User registered successfully",
      user,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to register user",
      null,
      [error.message],
      500
    );
  }
};

const login = async (req, res) => {
  try {
    const { emailOrWhatsapp, password } = req.body;
    let data;

    if (emailOrWhatsapp.includes("@")) {
      // Login with email
      data = await authService.loginWithEmail(emailOrWhatsapp, password);
    } else {
      // Login with WhatsApp number
      data = await authService.loginWithWhatsapp(emailOrWhatsapp, password);
    }

    res.sendResponse("success", "Login successful", data, null, 200);
  } catch (err) {
    res.sendResponse("error", "Failed to log in", null, [err.message], 500);
  }
};

module.exports = {
  register,
  login,
};
