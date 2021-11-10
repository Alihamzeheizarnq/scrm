const express = require('express')
const authController = require('../../../http/controller/api/v1/authController')
const UserController = require('../../../http/controller/api/v1/UserController')
const authMiddleware = require('../../../middleware/authMiddleware')

const router = express.Router()

router.post('/login', authController.login.bind(authController))
router.post('/check_auth', authController.check_auth.bind(authController))

router.use(authMiddleware)

router.post(
    '/users/category',
    UserController.category_store.bind(UserController),
)
router.get('/users/category', UserController.category.bind(UserController))

module.exports = router
