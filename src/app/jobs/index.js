const Model = require('../models')

class Job {
    constructor(option = null) {
        this.delay = option.delay ? option.delay : null
        this.queue = option.queue ? option.queue : null
        this.reserved_at = option.reserved_at ? option.reserved_at : null
    }
    async dispath(instance) {
        const className = instance.constructor.name
        const payload = this.serialize(instance)

        try {
            await Model.Job.create({
                queue: this.queue,
                available_at: this.delay,
                class: className,
                payload: payload,
                reserved_at: this.reserved_at,
            })

            console.log('success job to database')
        } catch (error) {
            console.log('error job to database')
        }
    }

    serialize(obj) {
        var str = JSON.stringify(obj)
        return str
    }

    unserialize(str, theClass) {
        var instance = new theClass()
        var serializedObject = JSON.parse(str)
        Object.assign(instance, serializedObject)
        return instance
    }

    handleJobs(jobs) {
        jobs.map((item) => {
            let ClassObj = require(`./../jobs/${item.class}`)
            let instance = new ClassObj()
            let serializedObject = JSON.parse(item.payload)
            Object.assign(instance, serializedObject)

            instance.handle()
        })
    }
}
module.exports = Job
