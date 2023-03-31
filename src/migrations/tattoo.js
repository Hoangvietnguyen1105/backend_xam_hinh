'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // email: DataTypes.STRING,
    // address:DataTypes.STRING,
    // gender:DataTypes.BOOLEAN,
    // phoneNumber:DataTypes.STRING,
    // type:DataTypes.STRING,
    // key:DataTypes.STRING,
    await queryInterface.createTable('tattoos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      des:{
        type:Sequelize.STRING
      },
      
      status: {
        type: Sequelize.STRING
      },
      img:{
        type:Sequelize.STRING
      },
     
     
      
      
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tattoos');
  }
};