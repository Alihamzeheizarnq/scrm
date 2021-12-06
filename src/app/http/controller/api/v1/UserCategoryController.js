const moment = require('moment')
const EmailJob = require('../../../../jobs/EmailJob')
const SmsJob = require('../../../../jobs/SmsJob')
const { CategoryRequest } = require('../../../request/v1/CategoryRequest')
const categoryTransform = require('../../../transform/v1/categoryTranform.')
const Controller = require('../../controller')

module.exports = new (class UserCategoryController extends Controller {
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
            // this.dispathJob(new SmsJob('09221534539', 'hi ali', '60000'), {
            //     delay: moment().add(2, 'minutes').format('YYYY-MM-DD hh:mm'),
            //     queue: 'users',
            // })

            // this.dispathJob(new EmailJob('alihamzehei2017@gmail.com'), {
            //     delay: moment().add(2, 'minutes').format('YYYY-MM-DD hh:mm'),
            //     queue: 'users',
            // })

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

    async delete(req, res) {
        try {
            const status = await this.model.Category.destroy({
                where: { id: req.body },
            })
            if (status) {
                res.json({ status: true }).status(200)
            }
        } catch (error) {}
    }

    async edit(req, res) {
        const id = req.params.id
        try {
            const status = await this.model.Category.update(
                {
                    title: req.body.title,
                    body: req.body.body,
                },
                { where: { id } },
            )

            if (status) {
                res.json({ status: true }).status(200)
            }
        } catch (error) {
            res.json({ status: error }).status(500)

        }
    }
})()
