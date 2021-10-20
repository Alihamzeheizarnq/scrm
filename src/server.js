const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

    const app = express();


    app.get('/a', (req, res) => {
        res.send('ali');
    });

    app.get('*', (req, res) => {
        handle(req, res);
    })


    app.listen(3000, () => {
        console.log(`running serevr localhost:3000 ${process.env.NODE_ENV} mode....`);
    });

})