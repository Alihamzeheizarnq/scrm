const express = require('express')
const path = require('path')
const next = require('next')
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const session = require('express-session')

const db = require('./app/models')
const Cron = require('./app/service/cronService')
const { setIo } = require('./app/service/socketService')

dotEnv.config({ path: path.resolve('..', '.env') })

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(
        session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: new Date(Date.now() + 86400000) },
        }),
    )

    app.use(require('./app/routes/api'))
    app.use(require('./app/middleware/checkAuthMiddleware'))
    app.use(require('./app/middleware/redirectNextMiddleware'))

    app.get('*', (req, res) => {
        handle(req, res)
    })

    Cron.start()

    db.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
            const server = app.listen(process.env.PORT, () => {
                console.log(
                    `running serevr localhost:${process.env.PORT} ${process.env.NODE_ENV} mode....`,
                )
            })

            setIo(server)
            console.log()
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err)

            process.exit(2)
        })
    module.exports = app
})
