// patientid: DataTypes.INTEGER,
//     doctorId:DataTypes.INTEGER,
//     description:DataTypes.TEXT,

'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // currentNumber: DataTypes.STRING,
    // maxNumber:DataTypes.STRING,
    // date:DataTypes.DATE,
    // timeType:DataTypes.STRING,
    // doctorId:DataTypes.INTEGER,
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      currentNumber: {
        type: Sequelize.INTEGER
      },
      maxNumber: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      timeType:{
        type: Sequelize.STRING
      },
      doctorId:{
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Schedules');
  }
};