const express = require('express');
const UserController = require('../../../http/controller/api/v1/UserController');


const router = express.Router();




router.post('/users/category', UserController.category.bind(UserController));
router.get('/users/category', UserController.index.bind(UserController));


module.exports = router;