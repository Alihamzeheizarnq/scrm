const express = require('express')
const path = require('path')
const next = require('next')
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const session = require('express-session')
const cron = require('node-cron')
const moment = require('moment')
const db = require('./app/models')
const Job = require('./app/jobs')

dotEnv.config({ path: path.resolve('..', '.env') })

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const app = express()

    app.use(bodyParser.json()) // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

    app.use(
        session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: new Date(Date.now() + 86400000) },
        }),
    )

    app.use(require('./app/routes/api'))

    app.use((req, res, next) => {
        req.redirectTo = (route) => {
            return {
                redirect: {
                    destination: route,
                    permanent: false,
                },
            }
        }

        if (req.session.user) {
            req.auth = req.session.user
        }

        next()
    })

    app.get('*', (req, res) => {
        handle(req, res)
    })

    let time = cron.schedule(
        '* * * *  *',
        async () => {


            const jobs = await db.Job.findAll({
                where : { available_at :  moment().format('YYYY-MM-DD hh:mm')}
            })

            if(jobs.length){
                (new Job({})).handleJobs(jobs)

            }
            console.log(`running`)

        },
        {
            scheduled: true,
            timezone: 'Asia/Tehran',
        },
    )
    time.start()
    db.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
            app.listen(process.env.PORT, () => {
                console.log(
                    `running serevr localhost:${process.env.PORT} ${process.env.NODE_ENV} mode....`,
                )
            })
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err)

            process.exit(2)
        })
})
