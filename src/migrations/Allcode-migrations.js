'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // id:DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // email: DataTypes.STRING,
    // address:DataTypes.STRING,
    // gender:DataTypes.BOOLEAN,
    // phonenumber:DataTypes.STRING,
    // roleid:DataTypes.STRING,
    await queryInterface.createTable('Allcodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key:{
        type: Sequelize.STRING
      },
      type:{
        type: Sequelize.STRING
      },
      value:{
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Allcodes');
  }
};