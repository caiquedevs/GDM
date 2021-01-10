'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    static associate(models) {
      this.belongsToMany(models.Specialties, {
        through: 'Specialties_doctors',
        as: 'all_specialties',
        foreignKey: 'doctorId',
      });
    }
  }
  Doctors.init(
    {
      name: {
        type: DataTypes.STRING(120),
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'This field must be between 3 and 255 characters',
          },
        },
      },
      crm: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'This crm already exists',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'This field must be between 3 and 255 characters',
          },
        },
      },
      tel: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'This field must be between 3 and 255 characters',
          },
        },
      },
      cel: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'This field must be between 3 and 255 characters',
          },
        },
      },
      cep: {
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
      modelName: 'Doctors',
    }
  );
  return Doctors;
};
