'use strict';

const items = [
  {
    id: 'WOOD-1234',
    name: 'Wood'
  },
  {
    id: 'PAPER-5678',
    name: 'Paper'
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return process.env.INSERT_MOCK_ITEMS_SEEDER
      ? queryInterface.bulkInsert('Items', itemsMock, {})
      : Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
    return process.env.INSERT_MOCK_ITEMS_SEEDER
      ? queryInterface.bulkDelete(
          'Items',
          {
            id: { [Sequelize.Op.in]: itemsMock.map(item => item.id) }
          },
          {}
        )
      : Promise.resolve();
  }
};
