// const db = require('.');

module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "sales",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deliveryNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      saleDate: DataTypes.DATE,
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // sequelize: db,
      sequelize,
      modelName: "sales",
      tableName: "sales",
      underscored: true,
      timestamps: false,
    }
  );

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, {
      foreignKey: "userId",
      otherKey: "id",
      as: "customer",
    });

    Sales.belongsTo(models.User, {
      foreignKey: "sellerId",
      otherKey: "id",
      as: "seller",
    });
  };

  return Sales;
};
