// patientid: DataTypes.INTEGER,
//     doctorId:DataTypes.INTEGER,
//     description:DataTypes.TEXT,

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   // statusId: DataTypes.STRING,
//     doctorId:DataTypes.INTEGER,
//     patientId:DataTypes.INTEGER,
//     date:DataTypes.DATE,
//     timeType:DataTypes.STRING,
    await queryInterface.createTable('Historys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      doctorId: {
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      description:{
        type:Sequelize.TEXT
      },
      files:{
        type:Sequelize.TEXT
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
    await queryInterface.dropTable('Historys');
  }
};