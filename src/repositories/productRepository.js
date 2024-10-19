const db = require("../models");
const { Op } = require("sequelize");
const Product = db.Product;

// Fetch all products, optionally filtered by category ID and search term
const getAllProducts = (categoryId = null, search = null) => {
  const queryOptions = {
    include: ["Category"], // Include associated Category model
    order: [["product_name", "ASC"]], // Order products by name in ascending order
  };

  // If categoryId is provided, add it to the where condition
  if (categoryId) {
    queryOptions.where = { category_id: categoryId };
  }

  // If search term is provided, add it to the where condition for product_name
  if (search) {
    queryOptions.where = {
      ...queryOptions.where, // Merge existing where conditions
      product_name: {
        [Op.like]: `%${search}%`, // Use LIKE for partial matching
      },
    };
  }

  return Product.findAll(queryOptions); // Fetch products with specified query options
};

// Fetch a product by its ID, including its associated category
const getProductById = (id) => Product.findByPk(id, { include: ["Category"] });

// Create a new product
const createProduct = (data) => Product.create(data);

// Update an existing product by its ID
const updateProductById = (id, data) =>
  Product.findByPk(id).then((product) => {
    if (product) {
      return product.update(data); // Update the product if found
    }
    return null;
  });

// Delete a product by its ID
const deleteProductById = (id) =>
  Product.findByPk(id).then((product) => {
    if (product) {
      return product.destroy(); // Destroy the product if found
    }
    return null;
  });

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
