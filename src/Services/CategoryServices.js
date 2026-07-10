const categoryModel = require('../model/category');

class categoryServices{

    async createCategory(data){
        const categorys = await categoryModel.find({});
        const categoryId = `CAT${categorys.length+1}`
   
    

        const existingCategory = await categoryModel.findOne({
            categoryId: categoryId
        });
        
        if (existingCategory) {
            throw new Error("Product ID already exists");
        }
        
        data.categoryId = categoryId;
            const newCategory = await categoryModel.create(data);
            return newCategory;

    }
}

module.exports = new categoryServices();