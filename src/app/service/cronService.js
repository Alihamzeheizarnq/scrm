const cron = require('node-cron')
const moment = require('moment')

const Job = require('../jobs')
const Model = require('../models')

class Cron {
    start() {
        let time = cron.schedule(
            '* * * * *',
            async () => {
                const jobs = await Model.Job.findAll({
                    where: {
                        available_at: moment().format('YYYY-MM-DD hh:mm'),
                    },
                })

                if (jobs.length) {
                    new Job().handleJobs(jobs)
                }
            },
            {
                scheduled: true,
                timezone: 'Asia/Tehran',
            },
        )
        time.start()
    }
}

module.exports = new Cron()
