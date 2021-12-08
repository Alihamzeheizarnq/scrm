const express = require('express')
const authController = require('../../../http/controller/api/v1/authController')

const router = express.Router()

router.post('/login', authController.login.bind(authController))
router.post('/check_auth', authController.check_auth.bind(authController))


module.exports = router
