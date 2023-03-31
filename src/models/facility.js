'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facilitys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      facilitys.belongsTo(models.users, {
        foreignKey: 'manager',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  facilitys.init({
   
    address: DataTypes.STRING,
    manager:DataTypes.INTEGER,
    des:DataTypes.STRING,
    img:DataTypes.STRING,
    status:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'facilitys',
  });
  return facilitys;
};