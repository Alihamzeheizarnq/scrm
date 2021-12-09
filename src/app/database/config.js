const fs = require('fs')
const path = require('path')

require('dotenv').config({ path: path.resolve('.env') })

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
        },
        logging: false,
    },
    test: {
        username: process.env.TEST_DB_USERNAME,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',

        dialectOptions: {
            bigNumberStrings: true,
        },
        logging: false,
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
            },
        },
        logging: false,
    },
}
