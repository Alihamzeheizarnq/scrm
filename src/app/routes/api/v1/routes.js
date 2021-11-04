const express = require('express');
const UserController = require('../../../http/controller/api/v1/UserController');


const router = express.Router();




router.post('/users/category', UserController.category_store.bind(UserController));
router.get('/users/category', UserController.category.bind(UserController));


module.exports = router;