'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_clinic_specialtys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor_clinic_specialtys.init({
   
    doctoerId: DataTypes.INTEGER,
    clinicId:DataTypes.INTEGER,
    specialtyId:DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Doctor_clinic_specialtys',
  });
  return Doctor_clinic_specialtys;
};