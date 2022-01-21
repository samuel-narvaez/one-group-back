'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Multimedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Multimedia.belongsTo(models.Products,{
        foreignKey: "id_products",
        as: "Products",
      });
    }
  }
  Multimedia.init({
    id_products: DataTypes.INTEGER,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Multimedia',
  });
  return Multimedia;
};