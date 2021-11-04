const express = require('express')
const path = require('path');
const next = require('next')
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');

const db = require('./app/models');


dotEnv.config({ path: path.resolve('..', '.env') });


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

    const app = express();


    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


    app.use(require('./app/routes/api'));


    app.get('/a', (req, res) => {
        res.send('ali');
    });

    app.get('*', (req, res) => {
        handle(req, res);
    })


    db.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');

        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);

            process.exit(2);
        });

    app.listen(3001, () => {
        console.log(`running serevr localhost:3000 ${process.env.NODE_ENV} mode....`);
    });

})