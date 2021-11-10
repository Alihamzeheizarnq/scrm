const { AuthRequest } = require('../../../request/v1/AuthRequest')
const Controller = require('../../controller')

module.exports = new (class authController extends Controller {
    /**
     * @method POST
     * @validate AuthRequest
     */
    async login(req, res) {
        const data = await AuthRequest(req, res)

        const user = await this.model.User.findOne({
            where: { email: data.username },
        })

        if (user) {
            if (user.validPassword(data.password)) {
                req.session.user = user
                res.status(200).json('ورود موفق')
            } else {
                res.status(401).json({
                    errors: { message: 'اطلاعات وارد شده صحیح نمیباشد' },
                })
            }
        } else {
            res.status(401).json({
                errors: { message: 'اطلاعات وارد شده صحیح نمیباشد' },
            })
        }
    }

    async check_auth(req, res) {
        if (req.session.user) {
            res.status(200).json({ status: true })
        } else {
            res.status(401).json({ status: false })
        }
    }
})()
