class SmsJob {
    constructor(number, message, time) {
        this.number = number
        this.message = message
        this.time = time
    }

    handle() {
        console.log(this.number)
    }
}

module.exports = SmsJob
