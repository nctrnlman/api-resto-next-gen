const authService = require("../services/authService");
const userService = require("../services/userService");

// Fungsi untuk mendaftar pengguna baru
const register = async (req, res) => {
  try {
    // Mengambil data pengguna dari body permintaan
    const { name, email, password, role, no_whatsapp } = req.body;

    // Memanggil layanan untuk mendaftar pengguna
    const user = await userService.registerUser(
      name,
      email,
      password,
      role,
      no_whatsapp
    );

    // Mengirimkan respon berhasil
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

// Fungsi untuk login pengguna
const login = async (req, res) => {
  try {
    // Mengambil email atau nomor WhatsApp dan password dari body permintaan
    const { emailOrWhatsapp, password } = req.body;

    // Memanggil layanan untuk login
    const data = await authService.login(emailOrWhatsapp, password);

    // Mengirimkan respon berhasil
    res.sendResponse("success", "Login successful", data, null, 200);
  } catch (err) {
    res.sendResponse("error", "Failed to log in", null, [err.message], 500);
  }
};

module.exports = {
  register,
  login,
};
