'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userFacilitys extends Model {
    static associate(models) {
      userFacilitys.belongsTo(models.users, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      userFacilitys.belongsTo(models.facilitys, {
        foreignKey: 'facilityId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  userFacilitys.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    facilityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'userFacilitys',
  });
  return userFacilitys;
};
