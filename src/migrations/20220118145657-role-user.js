'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'Users', // name of Source model
      'id_role', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn(
      'Users', // name of Source model
      'id_role' // key we want to remove
    );
  }
};
