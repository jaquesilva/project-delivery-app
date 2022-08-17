// const db = require(".");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
      // underscored: true,
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.sales, {
      foreignKey: "id",
      otherKey: "userId",
      as: "purchases",
    });

    User.hasMany(models.sales, {
      foreignKey: "id",
      otherKey: "sellerId",
      as: "sales",
    });
  };

  return User;
};
