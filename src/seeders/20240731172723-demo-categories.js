"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", [
      {
        category_name: "Appetizers",
        category_image: "https://example.com/images/appetizers.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Main Courses",
        category_image: "https://example.com/images/main-courses.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Desserts",
        category_image: "https://example.com/images/desserts.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Beverages",
        category_image: "https://example.com/images/beverages.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Specials",
        category_image: "https://example.com/images/specials.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vegetarian",
        category_image: "https://example.com/images/vegetarian.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Seafood",
        category_image: "https://example.com/images/seafood.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Meat Dishes",
        category_image: "https://example.com/images/meat-dishes.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Salads",
        category_image: "https://example.com/images/salads.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Soups",
        category_image: "https://example.com/images/soups.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Breakfast",
        category_image: "https://example.com/images/breakfast.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Lunch",
        category_image: "https://example.com/images/lunch.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Dinner",
        category_image: "https://example.com/images/dinner.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Healthy Choices",
        category_image: "https://example.com/images/healthy-choices.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Kids Menu",
        category_image: "https://example.com/images/kids-menu.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Gluten-Free",
        category_image: "https://example.com/images/gluten-free.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vegan",
        category_image: "https://example.com/images/vegan.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Traditional",
        category_image: "https://example.com/images/traditional.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Fusion",
        category_image: "https://example.com/images/fusion.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Gourmet",
        category_image: "https://example.com/images/gourmet.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Seasonal",
        category_image: "https://example.com/images/seasonal.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add additional categories as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
