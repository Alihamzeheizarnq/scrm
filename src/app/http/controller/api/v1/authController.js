const { AuthRequest } = require('../../../request/v1/AuthRequest');
const Controller = require('../../controller');



module.exports = new class authController extends Controller {

    /**
     * @method POST
     * @validate AuthRequest
     */
    async login(req, res) {
        const data = await AuthRequest(req, res);
        console.log(data)
    }

}