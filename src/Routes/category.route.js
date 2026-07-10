const categoryController = require('../Controllers/category.controller');
const CategoryController = require('../Controllers/category.controller');
const router = require ('express').Router();

router.post('/create',categoryController.createCategory);
router.get('/',categoryController.getAllCategory);
router.get('/:categoryId',categoryController.GetCategory);
router.put('/:categoryId',categoryController.UpdateCategory);
router.delete('/:categoryId',categoryController.DeleteCategory);

module.exports = router