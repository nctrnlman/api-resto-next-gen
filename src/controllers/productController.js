const productService = require("../services/productService");

const getProducts = async (req, res) => {
  try {
    const { categoryId, search } = req.query;
    const products = await productService.getProducts(categoryId, search);

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

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (product) {
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

const createProduct = async (req, res) => {
  try {
    const {
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    } = req.body;
    const product = await productService.createProduct({
      product_name,
      product_price,
      product_image,
      category_id,
      description,
    });
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, product_price, category_id, description } = req.body;

    const product = await productService.updateProduct(id, {
      product_name,
      product_price,
      category_id,
      description,
    });
    if (product) {
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

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    if (product) {
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
