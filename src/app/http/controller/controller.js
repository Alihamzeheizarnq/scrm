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

    dispathJob(instance , option) {
        return (new Job(option)).dispath(instance).bind(new Job)
    }
}

module.exports = Controller
