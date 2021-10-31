const yup = require("yup");
const { HandelRequest } = require("../");
const { handelErrors } = require('../../../config/error');
yup.setLocale(handelErrors);

let schema = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().nullable(),
    type: yup.string().required()
});


module.exports.CategoryRequest = (req, res) => {
    return HandelRequest(req, res, schema);
}