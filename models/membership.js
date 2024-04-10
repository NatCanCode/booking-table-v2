'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    static associate(models) {
        Membership.belongsTo(models.User, { foreignKey: 'id_user', unique: true });
    }
  }
  membership.init({
    name: DataTypes.STRING,
    number_of_reservations: DataTypes.INTEGER,
    expiration_date: DataTypes.DATE,
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
              model: sequelize.models.User,
              key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Membership',
  });
  return membership;
};
