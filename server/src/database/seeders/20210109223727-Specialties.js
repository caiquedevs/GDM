module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Specialties',
      [
        {
          name: 'ALERGOLOGIA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ANGIOLOGIA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BUCO MAXILO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CARDIOLOGIA CLÍNICA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CARDIOLOGIA INFANTIL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CIRURGIA CABEÇA E PESCOÇO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CIRURGIA CARDÍACA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CIRURGIA DE TÓRAX',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Specialties', null, {}),
};
