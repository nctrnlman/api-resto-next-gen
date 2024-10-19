const db = require("../models");
const Category = db.Category;

// Retrieve all categories from the database
const getAllCategories = () => Category.findAll();

// Retrieve a category by its ID
const getCategoryById = (id) => Category.findByPk(id);

// Create a new category in the database
const createCategory = (data) => Category.create(data);

// Update an existing category by its ID
const updateCategoryById = (id, data) =>
  Category.findByPk(id).then((category) => {
    if (category) {
      return category.update(data);
    }
    return null;
  });

// Delete a category by its ID
const deleteCategoryById = (id) =>
  Category.findByPk(id).then((category) => {
    if (category) {
      return category.destroy();
    }
    return null;
  });

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
