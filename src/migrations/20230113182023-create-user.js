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
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      date:{
        type:Sequelize.STRING
      },
      phoneNumber:{
        type:Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password:{
        type:Sequelize.STRING
      },
      role:{
        type:Sequelize.STRING
      },
      status:{
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
    await queryInterface.dropTable('Users');
  }
};