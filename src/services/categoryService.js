const categoryRepository = require("../repositories/categoryRepository");

// Mengambil semua kategori dari repositori
const getCategories = () => categoryRepository.getAllCategories();

// Mengambil kategori berdasarkan ID dari repositori
const getCategory = (id) => categoryRepository.getCategoryById(id);

// Membuat kategori baru dengan data yang diberikan
const createCategory = (data) => categoryRepository.createCategory(data);

// Memperbarui kategori yang ada berdasarkan ID dan data yang diberikan
const updateCategory = (id, data) =>
  categoryRepository.updateCategoryById(id, data);

// Menghapus kategori berdasarkan ID
const deleteCategory = (id) => categoryRepository.deleteCategoryById(id);

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
