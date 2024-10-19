require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const db = require("./src/models");
const formatResponse = require("./src/utils/responseHandler");

// Membuat instance aplikasi Express
const app = express();

// Menggunakan middleware CORS untuk mengizinkan permintaan lintas domain
app.use(cors());

// Menggunakan middleware untuk parsing JSON dari body permintaan
app.use(express.json());

// Menggunakan middleware untuk parsing JSON dari body permintaan
app.use(formatResponse);

// Public routes
app.use("/api/auth", authRoutes);

// Protected routes (requires authentication)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

// Mengambil port dari variabel lingkungan atau menggunakan 8000 sebagai default
const PORT = process.env.PORT || 8000;

// Fungsi untuk memulai server
const startServer = async () => {
  try {
    // Menghubungkan dan menyinkronkan database dengan model Sequelize
    await db.sequelize.sync();

    // Memulai server dan mendengarkan permintaan di port yang ditentukan
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // Menampilkan pesan di console saat server berjalan
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

// Memanggil fungsi untuk memulai server
startServer();
