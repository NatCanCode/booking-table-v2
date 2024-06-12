'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spot.belongsTo(models.Room, { foreignKey: 'id_room' });
      Spot.belongsToMany(models.Reservation, { through: 'ReservationSpots', foreignKey: 'id_spot' });
    }
  }
  Spot.init({
    name: DataTypes.STRING,
    id_room: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Rooms", // Nom du modèle référencé
        },
        key: 'id', // Clé dans le modèle référencé
      },
    }, 
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
