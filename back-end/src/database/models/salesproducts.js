// const db = require(".");

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  }, {
    // sequelize: db,
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'SalesProducts',
  });
  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Sales, {
      foreignKey: 'saleId',
      as: 'sale',
    });
    SalesProducts.belongsTo(models.Products, {
      foreignKey: 'productId',
      as: 'product',
    });
  }
  return SalesProducts;
}
