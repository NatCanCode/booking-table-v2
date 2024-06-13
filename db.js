const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config');
console.log(process.env.DATABASE_DEV)

const environment = process.env.ENVIRONMENT || development
const dbconfig = config[environment]

// const config = {
//   development: {
//     username: process.env.USER_DEV,
//     password: process.env.PASSWORD_DEV,
//     database: process.env.DATABASE_DEV,
//     host: process.env.HOST_DEV,
//     dialect: "postgres",
//   },
//   test: {
//     username: process.env.USER_TEST,
//     password: process.env.PASSWORD_TEST,
//     database: process.env.DATABASE_TEST,
//     host: process.env.HOST_TEST,
//     dialect: "postgres",
//   },
//   production: {
//     username: process.env.USER_PROD,
//     password: process.env.PASSWORD_PROD,
//     database: process.env.DATABASE_PROD,
//     host: process.env.HOST_PROD,
//     dialect: "postgres",
//   },
// }[process.env.ENVIRONMENT || "development"];
// console.log(dbconfig.database)

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    logging: false,
  },
);

const Reservation = require('./models/reservationModel')( sequelize, DataTypes );
const Room = require('./models/roomModel')( sequelize, DataTypes );
const Spot = require('./models/spotModel')( sequelize, DataTypes );
const User = require('./models/userModel')( sequelize, DataTypes );

// Synchronisation avec la base de données
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Les tables ont été créées !");
  })
  .catch((error) => {
    console.error("Erreur lors de la création des tables :", error);
  });

module.exports = {
    Reservation,
    Room,
    Spot,
    User
}
