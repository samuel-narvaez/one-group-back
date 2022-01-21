'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.Multimedia,{
        foreignKey: "id_products",
        as: "Multimedia",
      });

    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};