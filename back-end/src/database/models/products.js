// const db = require(".");

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "products",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      url_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "products",
      modelName: "products",
      underscored: true,
      timestamps: false,
    }
  );
  return Products;
};
