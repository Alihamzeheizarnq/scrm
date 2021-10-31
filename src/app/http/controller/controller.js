const Model = require('../../models');


class Controller {
    constructor() {
        this.model = {
            User: Model.User,
            Category: Model.Category
        }
    }
}




module.exports = Controller;