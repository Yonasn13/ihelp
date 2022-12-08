'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize');
const initHelperProfile = (sequelize, DataTypes) => {
  
  class HelperProfile extends Model {
    static associate(models) {
      HelperProfile.belongsTo(models.User, {foreignKey: 'UserId'})
      HelperProfile.hasMany(models.Request, { foreignKey: 'HelperProfileId'})
    }
  }
  HelperProfile.init({
    UserId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    phoneNumber: DataTypes.STRING,
    language: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HelperProfile',
  });
  return HelperProfile;
};

export default initHelperProfile(connection, DataTypes);