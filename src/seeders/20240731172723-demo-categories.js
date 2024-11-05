"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", [
      {
        category_name: "Appetizers",
        category_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcyJnetayyOOa7HEZOjA7nDD1QWqgqeazsA&s",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Main Courses",
        category_image:
          "https://www.simplyrecipes.com/thmb/XVwWDPILV8NLHmc1beiOwkkIqhM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Festive-Main-Dishes-LEAD-f528cf35ca6245b0977da26edd3f7b47.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Desserts",
        category_image:
          "https://nirvana-store-assets.s3.ap-southeast-1.amazonaws.com/top_view_dried_fruits_with_different_raisins_snacks_grey_space_1_6d704e2b4e.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Beverages",
        category_image:
          "https://www.austriajuice.com/hubfs/Beverage_compounds_drinks.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Specials",
        category_image:
          "https://realfood.tesco.com/media/images/monster-bites21842-LGH-1b1ae279-7f3c-495f-90b3-8a1fdde142e4-0-1400x919.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vegetarian",
        category_image:
          "https://veritascare.co.uk/wp-content/uploads/2022/07/Featured-image1200-%C3%97-628px-2-1030x539.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Seafood",
        category_image:
          "https://cdn1-production-images-kly.akamaized.net/xM1Sq-Y_pLCjJLAoh4u41IeOliA=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1456164/original/044183500_1483451195-ProjectImages_Manfaat-Seafood-Bagi-Kesehatan-Tulang-dan-gigi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Meat Dishes",
        category_image:
          "https://www.datocms-assets.com/20941/1713879043-best-beef-dishes.png?auto=compress&fm=jpg&w=850",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Salads",
        category_image:
          "https://simple-veganista.com/wp-content/uploads/2012/09/healthy-chopped-vegetable-salad-recipe-4.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Soups",
        category_image:
          "https://www.tasteofhome.com/wp-content/uploads/2024/10/43-Soup-Recipes-to-Make-for-a-Cozy-Dinner_KSedit_FT.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Breakfast",
        category_image:
          "https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board27.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Lunch",
        category_image:
          "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2022/02/vegan-cafe-lunch-0218221.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Dinner",
        category_image:
          "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A99d00be6-5ffc-49ba-b520-bed03b704f34?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Healthy Choices",
        category_image:
          "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Kids Menu",
        category_image:
          "https://boncafe.co.id/admin/web/upload_images/kategori_makanan/20201124041752864433.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Gluten-Free",
        category_image:
          "https://www.uhhospitals.org/-/media/images/blog/2022/07/gluten-free-food-1139277998-blog-mainarticleimage.jpg?h=450&w=720&la=en&hash=8C2354C9142E35E97FB5A75F6D138646",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vegan",
        category_image:
          "https://assets.clevelandclinic.org/transform/db02fd57-39b0-445b-ab4e-783e647c9e73/array-vegan-foods-1488883191",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Traditional",
        category_image:
          "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622207103/Indonesian-Food-Main/Indonesian-Food-Main.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Fusion",
        category_image:
          "https://www.escoffier.edu/wp-content/uploads/2019/10/Burger-with-a-rice-bun-sitting-on-a-plate-with-chop-sticks-1400.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Gourmet",
        category_image:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/4d/ef/29/gourmet-food-parlour.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Seasonal",
        category_image:
          "https://cdn.winsightmedia.com/platform/files/public/2018-10/background/800x420/roasted-winter-veggies_1541017178.JPG?VersionId=yQZ86_H_6WUH05JVMYs5kNEQRYTj6LFr",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
