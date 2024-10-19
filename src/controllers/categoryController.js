const categoryService = require("../services/categoryService");

// Fungsi untuk mengambil semua kategori
const getAllCategories = async (req, res) => {
  try {
    // Memanggil layanan untuk mendapatkan semua kategori
    const categories = await categoryService.getCategories();

    // Mengirimkan respon berhasil
    res.sendResponse(
      "success",
      "Categories retrieved successfully",
      categories,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve categories",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk mengambil kategori berdasarkan ID
const getCategoryById = async (req, res) => {
  try {
    // Mengambil kategori berdasarkan ID dari parameter URL
    const category = await categoryService.getCategory(req.params.id);
    if (category) {
      // Jika kategori ditemukan, mengirimkan respon berhasil
      res.sendResponse(
        "success",
        "Category retrieved successfully",
        category,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Category not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve category",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk membuat kategori baru
const createCategory = async (req, res) => {
  try {
    // Mengambil nama kategori dari body permintaan
    const { name } = req.body;

    // Memanggil layanan untuk membuat kategori baru
    const category = await categoryService.createCategory(name);
    res.sendResponse(
      "success",
      "Category created successfully",
      category,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create category",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk memperbarui kategori berdasarkan ID
const updateCategory = async (req, res) => {
  try {
    // Mengambil ID kategori dari parameter URL dan nama dari body permintaan
    const { id } = req.params;
    const { name } = req.body;

    // Memanggil layanan untuk memperbarui kategori
    const category = await categoryService.updateCategory(id, name);

    if (category) {
      // Jika kategori berhasil diperbarui, mengirimkan respon berhasil
      res.sendResponse(
        "success",
        "Category updated successfully",
        category,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Category not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update category",
      null,
      [error.message],
      500
    );
  }
};

// Fungsi untuk menghapus kategori berdasarkan ID
const deleteCategory = async (req, res) => {
  try {
    // Memanggil layanan untuk menghapus kategori berdasarkan ID
    const success = await categoryService.deleteCategory(req.params.id);
    if (success) {
      // Jika berhasil dihapus, mengirimkan respon berhasil
      res.sendResponse(
        "success",
        "Category deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Category not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete category",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
