const Job = require('../../jobs')
const Model = require('../../models')

class Controller {
    constructor() {
        this.model = {
            User: Model.User,
            Category: Model.Category,
            Job: Model.Job,
        }
    }

    dispathJob(instance, option) {
        const job = new Job()
        job.dispath(instance, option)
    }
}

module.exports = Controller
