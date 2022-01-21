'use strict';

const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.Role, {
        foreignKey: "id_role",
        as: "Role",
      });
    }
  }
  Users.init({
    id_role: DataTypes.INTEGER,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    nit: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    hooks: {
      beforeCreate: async (User) => {
        const { password } = User
        var hash = await bcrypt.hash(password, 12);
        User.password = hash;
      }
    }
  });
  return Users;
};