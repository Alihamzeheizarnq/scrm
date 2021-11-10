const yup = require('yup')
const { HandelRequest } = require('../')
const { handelErrors } = require('../../../config/error')
yup.setLocale(handelErrors)

let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})

module.exports.AuthRequest = (req, res) => {
    return HandelRequest(req, res, schema)
}
