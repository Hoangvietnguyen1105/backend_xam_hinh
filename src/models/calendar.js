'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calendars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      calendars.belongsTo(models.users, {
        foreignKey: 'userId1',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      calendars.belongsTo(models.facilitys, {
        foreignKey: 'facilityId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      calendars.belongsTo(models.users, {
        foreignKey: 'userId2',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  calendars.init({
   userId1:DataTypes.INTEGER,
   userId2:DataTypes.INTEGER,
   facilitysId:DataTypes.INTEGER,
   status:DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'calendars',
  });
  return calendars;
};