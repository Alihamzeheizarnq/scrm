const express = require('express')
const authMiddleware = require('../../../middleware/authMiddleware')

const router = express.Router()

router.use( require('./routes'))
router.use(authMiddleware)
router.use('/users', require('./users'))

module.exports = router
