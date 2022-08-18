module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "SalesProducts",
    {
      saleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "sales",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "Product",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: false,
      modelName: "SalesProducts",
      tableName: "sales_products",
    }
  );

  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.sales, {
      foreignKey: "saleId",
      as: "sale",
    });
    SalesProducts.belongsTo(models.products, {
      foreignKey: "productId",
      as: "productName",
    });
  };
  return SalesProducts;
};
