'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialties extends Model {
    static associate(models) {
      this.belongsToMany(models.Doctors, {
        through: 'Specialties_doctors',
        as: 'all_doctors',
        foreignKey: 'specialtyId',
      });
    }
  }
  Specialties.init(
    {
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'This field must be between 3 and 255 characters',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Specialties',
    }
  );
  return Specialties;
};
