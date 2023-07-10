const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  // Определение полей модели
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync({ force: true }) // force: true удалит существующие таблицы и создаст новые
  .then(() => {
    console.log("Таблицы созданы");
  })
  .catch((error) => {
    console.error("Ошибка при создании таблиц:", error);
  });

module.exports = User;
