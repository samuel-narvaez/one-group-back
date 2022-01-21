'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      id_role: 1,
      name: 'Samuel',
      last_name: 'Narvaez',
      nit: '1067942747',
      password: await bcrypt.hash('50890578',12),
      email: 'samueldavidn@hotmail.com',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
