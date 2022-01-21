'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ratings.belongsTo(models.Products,{
        foreignKey: "id_product",
        as: "Products",
      });
    }
  }
  Ratings.init({
    id_product: DataTypes.INTEGER,
    rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Ratings',
  });
  return Ratings;
};