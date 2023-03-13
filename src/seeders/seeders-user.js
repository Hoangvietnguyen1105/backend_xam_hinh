'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Hoang',
      lastName: 'Viet',
      email: 'Hoangvietnguyen1105@example.com',
      password:'123456',
      address:'ha noi',
      gender:1,
      phoneNumber:'0979342104',
      roleId:'R1',
      positionId:null,
      img:'12346',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
