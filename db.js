const { Sequelize, DataTypes } = require('sequelize');
console.log(process.env.DATABASE_DEV)

const config = {
  development: {
    username: process.env.USER_DEV,
    password: process.env.PASSWORD_DEV,
    database: process.env.DATABASE_DEV,
    host: process.env.HOST_DEV,
    dialect: "postgres",
  },
  test: {
    username: process.env.USER_TEST,
    password: process.env.PASSWORD_TEST,
    database: process.env.DATABASE_TEST,
    host: process.env.HOST_TEST,
    dialect: "postgres",
  },
  production: {
    username: process.env.USER_PROD,
    password: process.env.PASSWORD_PROD,
    database: process.env.DATABASE_PROD,
    host: process.env.HOST_PROD,
    dialect: "postgres",
  },
}[process.env.ENVIRONMENT || "development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false,
  },
);

const Reservation = require('./models/reservationModel')( sequelize, DataTypes );
const Room = require('./models/roomModel')( sequelize, DataTypes );
const Spot = require('./models/spotModel')( sequelize, DataTypes );
const User = require('./models/userModel')( sequelize, DataTypes );

module.exports = {
    Reservation,
    Room,
    Spot,
    User
}
