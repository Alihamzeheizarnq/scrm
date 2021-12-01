class SmsJob {
    constructor(number) {
        this.number = number
    }

    handle() {
        console.log(this.number + 'alihamzeehi')
    }
}

module.exports = SmsJob
