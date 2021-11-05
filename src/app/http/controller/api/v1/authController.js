const { AuthRequest } = require('../../../request/v1/AuthRequest');
const Controller = require('../../controller');



module.exports = new class authController extends Controller {

    /**
     * @method POST
     * @validate AuthRequest
     */
    async login(req, res) {
        const data = await AuthRequest(req, res);



        const user = await this.model.User.findOne({ email: data.email });


        if (user) {
            if (user.validPassword(data.password)) {

                req.session.user = user;
                res.status(200).json('ورود موفق');

            } else {
                res.status(401).json({ errors: { message: 'اطلاعات وارد شده صحیح نمیباشد' } });
            }

        } else {
            res.status(401).json({ errors: { message: 'اطلاعات وارد شده صحیح نمیباشد' } });
        }

    }

}