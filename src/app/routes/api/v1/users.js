const express = require('express')

const UserCategoryController = require('../../../http/controller/api/v1/UserCategoryController')

const router = express.Router()

router.post(
    '/category',
    UserCategoryController.category_store.bind(UserCategoryController),
)
router.get(
    '/category',
    UserCategoryController.category.bind(UserCategoryController),
)

router.delete(
    '/category/delete',
    UserCategoryController.delete.bind(UserCategoryController),
)
router.put(
    '/category/edit/:id',
    UserCategoryController.edit.bind(UserCategoryController),
)
module.exports = router
