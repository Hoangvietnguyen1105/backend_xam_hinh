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
    await queryInterface.createTable('facilitys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      des:{
        type:Sequelize.STRING
      },
      manager:{
        type:Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
    await queryInterface.dropTable('facilitys');
  }
};