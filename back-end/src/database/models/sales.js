const db = require('.');

module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
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
      allowNull: false
    }
  }, {
    sequelize: db,
    modelName: 'Sales',
    underscored: true,
    timestamps: false
    });
  return Sales;
};