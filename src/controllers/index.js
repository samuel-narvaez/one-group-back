const loginController = require('./auth/loginController')
const userController = require('./users/userController');
const productsController = require('./products/productsController');
const mediaController = require('./products/mediaController');
const raitingController = require('./products/raitingController');

module.exports = {
    loginController,
    userController,
    productsController,
    mediaController,
    raitingController
}