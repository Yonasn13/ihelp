'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize');
const initUser = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Request, { foreignKey: 'UserId'})
      User.hasOne(models.HelperProfile, { foreignKey: 'UserId'})
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default initUser (connection, DataTypes);