const authService = require("../services/authService");
const userService = require("../services/userService");

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await userService.registerUser(name, email, password, role);
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
    const { email, password } = req.body;
    const data = await authService.login(email, password);
    res.sendResponse("success", "Login successful", data, null, 200);
  } catch (err) {
    res.sendResponse("error", "Failed to log in", null, [err.message], 500);
  }
};

module.exports = {
  register,
  login,
};
