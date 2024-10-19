const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

// Middleware untuk otentikasi menggunakan JWT
const authMiddleware = (req, res, next) => {
  // Mengambil token dari header authorization
  const token = req.headers["authorization"]?.split(" ")[1];

  // Jika tidak ada token, mengirimkan respon error
  if (!token) {
    return res.sendResponse("error", "No token provided", null, null, 403);
  }

  // Memverifikasi token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.sendResponse(
        "error",
        "Failed to authenticate token",
        null,
        [err.message],
        401
      );
    }

    // Jika token valid, menyimpan informasi pengguna di objek req
    req.userId = decoded.id; // Menyimpan ID pengguna
    req.userEmail = decoded.email; // Menyimpan email pengguna
    req.userNoWhatsapp = decoded.no_whatsapp; // Menyimpan nomor WhatsApp pengguna
    req.userRole = decoded.role; // Menyimpan peran pengguna

    next(); // Melanjutkan ke middleware berikutnya atau rute yang diminta
  });
};

module.exports = authMiddleware;
