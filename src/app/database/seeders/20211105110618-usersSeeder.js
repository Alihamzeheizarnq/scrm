'use strict';
const bcrypt = require('bcrypt');


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      firstName: 'ali',
      lastName: 'hamzehei',
      email: 'alihamzehei2017@gmail.com',
      level: 'super_user',
      password: bcrypt.hashSync('123456789', bcrypt.genSaltSync(10)),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
