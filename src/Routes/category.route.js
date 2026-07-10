const categoryController = require('../Controllers/category.controller');
const CategoryController = require('../Controllers/category.controller');
const router = require ('express').Router();

router.post('/create',categoryController.createCategory);


module.exports = router