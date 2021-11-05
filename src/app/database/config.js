const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.resolve('.env') });


module.exports = {
  development: {
    username: 'root',
    password: '',
    database: process.env.PROD_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    define: {
      bigNumberStrings: true,
      charset: 'utf8',
      collation: 'utf8_unicode_ci',
      collate: 'utf8_unicode_ci',

    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',

    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: 'root',
    password: '',
    database: process.env.PROD_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    define: {
      bigNumberStrings: true,
      charset: 'utf8',
      collation: 'utf8_unicode_ci',
      collate: 'utf8_unicode_ci',
      ssl: {
        // ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      }
    }
  }
};