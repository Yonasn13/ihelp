'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize');
const initReview = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Request, {foreignKey: 'RequestId'})
    }
  }
  Review.init({
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    RequestId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};

export default initReview(connection, DataTypes);