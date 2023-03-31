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
    await queryInterface.createTable('calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId1:{
        type:Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      userId2:{
        type:Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      facilityId:{
        type:Sequelize.INTEGER,
        references:{
            model:'facilitys',
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('calendars');
  }
};