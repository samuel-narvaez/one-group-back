'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      name: 'Product-one',
      description: 'este es el producto numero uno',
      price: '10'
    },{
      name: 'Product-two',
      description: 'este es el producto numero dos',
      price: '15'
    },{
      name: 'Product-three',
      description: 'este es el producto numero tres',
      price: '20'
    },{
      name: 'Product-four',
      description: 'este es el producto numero cuatro',
      price: '25'
    },{
      name: 'Product-five',
      description: 'este es el producto numero cinco',
      price: '30'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
