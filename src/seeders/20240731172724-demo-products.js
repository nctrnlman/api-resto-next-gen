"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Spring Rolls",
        product_price: "12000",
        category_id: 1, // Appetizers
        description:
          "Crispy spring rolls filled with vegetables and served with a dipping sauce.",
        product_image:
          "https://static01.nyt.com/images/2023/12/21/multimedia/AS-Spring-Rolls-bzjt/AS-Spring-Rolls-bzjt-superJumbo.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Grilled Salmon",
        product_price: "85000",
        category_id: 2, // Main Courses
        description: "Grilled salmon fillet served with lemon and dill sauce.",
        product_image:
          "https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Chocolate Cake",
        product_price: "30000",
        category_id: 3, // Desserts
        description:
          "Rich and moist chocolate cake topped with creamy frosting.",
        product_image:
          "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice-500x500.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Mojito",
        product_price: "15000",
        category_id: 4, // Beverages
        description:
          "Refreshing mint and lime cocktail with a hint of sweetness.",
        product_image:
          "https://www.liquor.com/thmb/MJRVqf-itJGY90nwUOYGXnyG-HA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mojito-720x720-primary-6a57f80e200c412e9a77a1687f312ff7.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Caesar Salad",
        product_price: "25000",
        category_id: 9, // Salads
        description:
          "Classic Caesar salad with romaine lettuce, croutons, and parmesan cheese.",
        product_image:
          "https://www.liveeatlearn.com/wp-content/uploads/2019/07/vegetarian-caesar-salad-vert.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Spaghetti Carbonara",
        product_price: "70000",
        category_id: 2, // Main Courses
        description: "Creamy pasta with pancetta, egg, and parmesan.",
        product_image:
          "https://asset.kompas.com/crops/534CByKLuUtN81KtzF3RZkkil8A=/249x82:1000x583/1200x800/data/photo/2022/12/27/63aaef8f6a2f6.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Tiramisu",
        product_price: "35000",
        category_id: 3, // Desserts
        description:
          "Italian coffee-flavored dessert made with mascarpone cheese.",
        product_image:
          "https://cdn.idntimes.com/content-images/post/20230308/la-ricetta-classica-del-tiramisu-con-uova-savoiardi-e-mascarpone-1920x1080-776321ce582f23556734b0c6d87e3d56-0d6562acb9f1cb9303b145df1581da80_600x400.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Vegetarian Pizza",
        product_price: "60000",
        category_id: 2, // Main Courses
        description:
          "Pizza topped with fresh vegetables and mozzarella cheese.",
        product_image:
          "https://thefirstmess.com/wp-content/uploads/2021/06/vegan-spinach-artichoke-pizza-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Fruit Smoothie",
        product_price: "20000",
        category_id: 4, // Beverages
        description: "Blended smoothie made with fresh fruits and yogurt.",
        product_image:
          "https://www.eatingonadime.com/wp-content/uploads/2018/03/easy-fruit-smoothie-3-2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Chicken Wings",
        product_price: "30000",
        category_id: 1, // Appetizers
        description:
          "Spicy and crispy chicken wings served with ranch dipping sauce.",
        product_image:
          "https://www.allrecipes.com/thmb/Hl5oNkpyhlT71h0H2GmHuMmwCZg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-187822-baked-chicken-wings-2x1-5daa014314d34d62bfd9908009a6fa2a.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Beef Burger",
        product_price: "75000",
        category_id: 2, // Main Courses
        description:
          "Juicy beef burger with lettuce, tomato, and cheddar cheese.",
        product_image:
          "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Lemon Tart",
        product_price: "32000",
        category_id: 3, // Desserts
        description:
          "Tangy lemon tart with a buttery crust and fresh lemon zest.",
        product_image:
          "https://www.recipetineats.com/tachyon/2021/06/French-Lemon-Tart_5-main-SQ.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Iced Coffee",
        product_price: "18000",
        category_id: 4, // Beverages
        description: "Cold brewed coffee served over ice with a touch of milk.",
        product_image:
          "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Instant-Iced-Coffee-5-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Greek Salad",
        product_price: "27000",
        category_id: 9, // Salads
        description:
          "Fresh Greek salad with cucumbers, tomatoes, olives, and feta cheese.",
        product_image:
          "https://www.allrecipes.com/thmb/SkWzUVjyC9DRoefa4t7tjkPS0no=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14373-GreekSaladi-mfs-4X3-0354-e8388819cafa4bae843ea433258aa03d.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Pancakes",
        product_price: "22000",
        category_id: 12, // Breakfast
        description:
          "Fluffy pancakes served with maple syrup and fresh berries.",
        product_image:
          "https://www.onceuponachef.com/images/2009/08/pancakes-01.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Chicken Alfredo",
        product_price: "68000",
        category_id: 2, // Main Courses
        description:
          "Creamy Alfredo pasta with grilled chicken and parmesan cheese.",
        product_image:
          "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-V3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Apple Pie",
        product_price: "28000",
        category_id: 3, // Desserts
        description: "Classic apple pie with a flaky crust and spiced apples.",
        product_image:
          "https://sweetlycakes.com/wp-content/uploads/2019/12/Apple-Pie-8blog.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Mango Lassi",
        product_price: "19000",
        category_id: 4, // Beverages
        description:
          "Creamy and refreshing mango lassi with a hint of cardamom.",
        product_image:
          "https://www.allrecipes.com/thmb/0Bt-g5sI2osdveR2JuV7_cXOoR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1013592-b5127bcfd9594473b7ad7aa1343ca492.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Buffalo Cauliflower",
        product_price: "22000",
        category_id: 1, // Appetizers
        description: "Crispy cauliflower bites tossed in spicy buffalo sauce.",
        product_image:
          "https://www.allrecipes.com/thmb/Qshen23ONAK6kSfDldNd8PVTvqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239616-buffalo-cauliflower-DDMFS-4x3-dbc3ece590024fa0bb3f45773f1d511a.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Pork Ribs",
        product_price: "95000",
        category_id: 2, // Main Courses
        description: "Tender pork ribs glazed with a smoky BBQ sauce.",
        product_image:
          "https://www.bhg.com/thmb/jcFaaDJ7FEdWPtMZW_UhC3D0Obo=/1500x0/filters:no_upscale():strip_icc()/how-to-cook-pork-ribs-oven-slow-cooker-grill-01-hero-9e9a8b96cc144a84a9aaca2dcf354a03.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
