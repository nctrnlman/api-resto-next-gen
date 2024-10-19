const productService = require("../services/productService");

// Fungsi untuk mengambil semua produk dengan parameter pencarian dan kategori
const getProducts = async (req, res) => {
  try {
    const { categoryId, search } = req.query; // Mengambil parameter pencarian dari query string
    const products = await productService.getProducts(categoryId, search); // Memanggil layanan untuk mengambil produk

    // Mengirimkan respon berhasil dengan daftar produk
    res.sendResponse(
      "success",
      "Products retrieved successfully",
      products,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve products",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk mengambil produk berdasarkan ID
const getProduct = async (req, res) => {
  try {
    // Mengambil produk berdasarkan ID dari parameter URL
    const product = await productService.getProduct(req.params.id);
    if (product) {
      // Jika produk ditemukan, mengirimkan respon berhasil
      res.sendResponse(
        "success",
        "Product retrieved successfully",
        product,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve product",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk membuat produk baru
const createProduct = async (req, res) => {
  try {
    // Mengambil data produk dari body permintaan
    const {
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    } = req.body;

    // Memanggil layanan untuk membuat produk baru
    const product = await productService.createProduct({
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    });

    // Mengirimkan respon berhasil
    res.sendResponse(
      "success",
      "Product created successfully",
      product,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create product",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk memperbarui produk berdasarkan ID
const updateProduct = async (req, res) => {
  try {
    // Mengambil ID produk dari parameter dan data baru dari body permintaan
    const { id } = req.params;
    const { product_name, product_price, category_id, description } = req.body;

    // Memanggil layanan untuk memperbarui produk
    const product = await productService.updateProduct(id, {
      product_name,
      product_price,
      category_id,
      description,
    });

    if (product) {
      // Memanggil layanan untuk memperbarui produk
      res.sendResponse(
        "success",
        "Product updated successfully",
        product,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update product",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk menghapus produk berdasarkan ID
const deleteProduct = async (req, res) => {
  try {
    // Memanggil layanan untuk menghapus produk berdasarkan ID
    const product = await productService.deleteProduct(req.params.id);
    if (product) {
      // Jika berhasil dihapus, mengirimkan respon berhasil
      res.sendResponse(
        "success",
        "Product deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete product",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
