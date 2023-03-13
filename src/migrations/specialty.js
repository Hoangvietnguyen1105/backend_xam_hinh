// patientid: DataTypes.INTEGER,
//     doctorId:DataTypes.INTEGER,
//     description:DataTypes.TEXT,

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // description:DataTypes.TEXT,
    // img:DataTypes.STRING,
    await queryInterface.createTable('Specialtys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      description: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.STRING
      },
      name:{
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
    await queryInterface.dropTable('Specialtys');
  }
};