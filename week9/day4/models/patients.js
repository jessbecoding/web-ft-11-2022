"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patients.belongsTo(models.Employees, {
        foreignKey: "employeeAssignedId",
      });
    }
  }
  Patients.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      emplyeeAssignId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patients",
    }
  );
  return Patients;
};
