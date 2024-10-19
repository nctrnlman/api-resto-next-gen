module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product", // Nama model
    {
      id: {
        type: DataTypes.INTEGER, // Tipe data untuk ID
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: DataTypes.STRING, // Tipe data untuk nama produk
        allowNull: false,
      },
      product_price: {
        type: DataTypes.STRING, // Tipe data untuk harga produk
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER, // Tipe data untuk ID kategori
        references: {
          model: "Categories",
          key: "id",
        },
      },
      description: {
        type: DataTypes.TEXT, // Tipe data untuk deskripsi produk
        allowNull: true,
      },
      product_image: {
        type: DataTypes.TEXT, // Tipe data untuk gambar produk
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: "category_id",
    });
  };

  return Product;
};
