const { Sequelize, DataTypes } = require('sequelize');

const config = require('./config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

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
