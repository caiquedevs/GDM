'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(120),
      },
      crm: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      tel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      logradouro: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      complemento: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      bairro: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      localidade: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      uf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ibge: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gia: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ddd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      siafi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctors');
  },
};
