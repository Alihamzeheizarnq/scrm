const moment = require('moment')
const SmsJob = require('../../../../jobs/SmsJob')
const { CategoryRequest } = require('../../../request/v1/CategoryRequest')
const categoryTransform = require('../../../transform/v1/categoryTranform.')
const Controller = require('../../controller')

module.exports = new (class UserController extends Controller {
    /**
     * @method POST
     * @validate CategoryRequest
     */
    async category_store(req, res) {
        const data = await CategoryRequest(req, res)

        try {
            const category = await this.model.Category.create(data)
            return res.status(201).json({
                category,
            })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    /**
     * @method GET
     * @return object category
     */
    async category(req, res) {
        try {
           
            this.dispathJob(new SmsJob('09221534539'), { delay: moment().add(2, 'minutes').format('YYYY-MM-DD hh:mm') })
            const category = await this.model.Category.findAll({
                where: { type: 'user' },
            })

            const transform = new categoryTransform().TransformCollection(
                category,
            )

            return res.status(200).json({
                category: transform,
            })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
})()
