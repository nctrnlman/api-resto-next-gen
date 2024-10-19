module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category", // Model name
    {
      id: {
        type: DataTypes.INTEGER, // Data type for id
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING, // Data type for category name
        allowNull: false,
      },
      category_image: {
        type: DataTypes.TEXT, // Data type for category image URL
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // Define associations for the model
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      foreignKey: "category_id",
    });
  };

  return Category;
};
