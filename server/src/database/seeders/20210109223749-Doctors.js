module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Doctors',
      [
        {
          name: 'Caique Lourenco',
          crm: '00.000.01',
          tel: '(13) 9 4002-8931',
          cel: '(13) 9 4002-8931',
          cep: '11330-170',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Maria Santos',
          crm: '00.000.02',
          tel: '(13) 9 4002-8932',
          cel: '(13) 9 4002-8932',
          cep: '11330-180',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fernanda Soares',
          crm: '00.000.03',
          tel: '(13) 9 4002-8933',
          cel: '(13) 9 4002-8933',
          cep: '11330-190',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Doctors', null, {}),
};
