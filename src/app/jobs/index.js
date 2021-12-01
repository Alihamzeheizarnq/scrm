const Model = require('../models')

class Job {
    async dispath(instance, option = null) {
        const className = instance.constructor.name
        const payload = this.serialize(instance)

        try {
            await Model.Job.create({
                queue: option.queue ? option.queue : null,
                available_at: option.delay ? option.delay : null,
                class: className,
                payload: payload,
                reserved_at: option.reserved_at ? option.reserved_at : null,
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
