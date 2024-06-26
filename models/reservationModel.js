'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservation.belongsToMany(models.Spot, { through: 'ReservationSpots', foreignKey: 'id_reservation'});
     }
  }
  Reservation.init({
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    // numberOfGuests: DataTypes.INTEGER,
    note: DataTypes.STRING,
    status: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};
