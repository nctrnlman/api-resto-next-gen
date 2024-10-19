const userService = require("../services/userService");

// Fungsi untuk mengambil semua pengguna
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers(); // Memanggil layanan untuk mengambil semua pengguna
    res.sendResponse(
      "success",
      "Users retrieved successfully",
      users,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve users",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk mengambil pengguna berdasarkan ID
const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id); // Mengambil pengguna berdasarkan ID
    if (user) {
      // Jika pengguna ditemukan, mengirimkan respon berhasil
      res.sendResponse(
        "success",
        "User retrieved successfully",
        user,
        null,
        200
      );
    } else {
      res.sendResponse("error", "User not found", null, null, 404);
    }
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to retrieve user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk mengambil pengguna berdasarkan nomor WhatsApp
const getUserByWhatsapp = async (req, res) => {
  try {
    const user = await userService.getUserByWhatsapp(req.params.no_whatsapp); // Mengambil pengguna berdasarkan nomor WhatsApp
    if (user) {
      // Jika pengguna ditemukan, mengirimkan respon berhasil
      res.sendResponse(
        "success",
        "User retrieved successfully",
        user,
        null,
        200
      );
    } else {
      res.sendResponse("error", "User not found", null, null, 404);
    }
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to retrieve user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk memperbarui pengguna
const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID dari parameter
    const { name, email, password, no_whatsapp } = req.body; // Mengambil data pengguna dari body permintaan
    const user = await userService.updateUser(
      id,
      name,
      email,
      password,
      no_whatsapp // Memanggil layanan untuk memperbarui pengguna
    );
    if (user) {
      res.sendResponse("success", "User updated successfully", user, null, 200);
    } else {
      res.sendResponse("error", "User not found", null, null, 404);
    }
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to update user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk menghapus pengguna
const deleteUser = async (req, res) => {
  try {
    const success = await userService.deleteUser(req.params.id); // Menghapus pengguna berdasarkan ID
    if (success) {
      // Jika berhasil dihapus, mengirimkan respon berhasil
      res.sendResponse("success", "User deleted successfully", null, null, 200);
    } else {
      // Jika pengguna tidak ditemukan, mengirimkan respon error
      res.sendResponse("error", "User not found", null, null, 404);
    }
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to delete user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk mengambil pengguna berdasarkan token
const getUserByToken = async (req, res) => {
  try {
    const user = await userService.getUserById(req.userId); // Mengambil pengguna berdasarkan ID yang terdapat di token
    if (!user) {
      return res.sendResponse("error", "User not found", null, null, 404); // Mengirimkan respon error jika pengguna tidak ditemukan
    }
    res.sendResponse("success", "User retrieved successfully", user, null, 200);
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve user",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getUsers,
  getUser,
  getUserByWhatsapp,
  updateUser,
  deleteUser,
  getUserByToken,
};
