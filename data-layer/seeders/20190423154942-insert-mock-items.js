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
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map(item => item.id) }
      },
      {}
    );
  }
};
