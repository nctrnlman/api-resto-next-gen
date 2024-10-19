const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

// Fungsi untuk menangani login pengguna
const login = async (emailOrWhatsapp, password) => {
  let user;

  // Memeriksa apakah input adalah email atau nomor WhatsApp
  if (emailOrWhatsapp.includes("@")) {
    user = await userRepository.findUserByEmail(emailOrWhatsapp); // Mencari pengguna berdasarkan email
  } else {
    user = await userRepository.findUserByWhatsapp(emailOrWhatsapp); // Mencari pengguna berdasarkan nomor WhatsApp
  }

  // Jika pengguna tidak ditemukan, lemparkan kesalahan
  if (!user) {
    throw new Error("User not found");
  }

  // Memverifikasi password yang dimasukkan dengan yang tersimpan di database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }

  // Membuat token JWT setelah berhasil login
  const token = jwt.sign(
    {
      id: user.id, // Menyimpan ID pengguna
      email: user.email, // Menyimpan email pengguna
      no_whatsapp: user.no_whatsapp, // Menyimpan nomor WhatsApp pengguna
      role: user.role, // Menyimpan peran pengguna
    },
    secretKey, // Menggunakan kunci rahasia untuk signing
    { expiresIn: "1h" } // Menentukan waktu kedaluwarsa token
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
