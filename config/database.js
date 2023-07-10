const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("portalBase", "postgres", "864307", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // для отключения логов Sequelize
});

module.exports = sequelize;
