'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'Multimedia', // name of Source model
      'id_products', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn(
      'Multimedia', // name of Source model
      'id_products' // key we want to remove
    );
  }
};
