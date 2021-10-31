const { CategoryRequest } = require('../../../request/v1/CategoryRequest');
const Controller = require('../../controller');



module.exports = new class UserController extends Controller {


    async category(req, res) {

        const data = await CategoryRequest(req, res);


        try {
            const category = await this.model.Category.create(data);
            return res.status(201).json({
                category,
            });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }


    }


    async index(req, res) {



        try {
            const category = await this.model.Category.findAll();
            return res.status(200).json({
                category,
            });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }


    }
}