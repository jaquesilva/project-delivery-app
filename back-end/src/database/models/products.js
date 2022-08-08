// const db = require(".");

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    // sequelize: db,
    sequelize,
    modelName: 'Products',
    underscored: true,
    timestamps: false
    });
  return Products;
}
