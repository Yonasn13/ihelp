"use strict";
import connection from "../connection";
const { Model, DataTypes } = require("sequelize");
const initRequest = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      Request.belongsTo(models.User, { foreignKey: "UserId" });
      Request.belongsTo(models.HelperProfile, {
        foreignKey: "HelperProfileId",
      });
      Request.hasOne(models.Review, { foreignKey: "RequestId" });
    }
  }
  Request.init(
    {
      HelperProfileId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      message: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Request",
    }
  );
  return Request;
};

export default initRequest(connection, DataTypes);
