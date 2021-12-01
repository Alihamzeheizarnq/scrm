class EmailJob {
    constructor(email) {
        this.email = email
    }

    handle() {
        console.log(this.email)
    }
}

module.exports = EmailJob
