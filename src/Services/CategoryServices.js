const categoryModel = require('../model/category');
const ProductModel = require('../model/products');


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
            if(!newCategory){
                return "The Category is Not There !!"

            }
            return newCategory;

    }

    async getAllCategory(){
        const categorys = await categoryModel.find({});
        if(!categorys){
            return "The Category is Not There !!"
        }
        else{
            return categorys
        }
    }

    async GetCategory(categoryId){
        const category = await categoryModel.findOne(categoryId);
        if(!category){
            return "The Category is Not There !!"
        }
        else{
            return category
        }
    }

    async UpdateCategory(categoryId,data){

        const category = await categoryModel.findOneAndUpdate(
            categoryId,
            {$set : data},
           { new: true, runValidators: true }
        )
        if(!category){
            throw new Error("Category ID is InValid");
        }
        return category;


    }

    async DeleteCategory(categoryId) {
    const category = await categoryModel.findOne(categoryId);
    if (!category) {
        throw new Error("Category ID is invalid");
    }

    // 2. Delete all associated products in a single database query
    if (category.Products && category.Products.length > 0) {
        await ProductModel.deleteMany({ productId: { $in: category.Products } });
    }

    // 3. Delete the category itself
    await categoryModel.findOneAndDelete( categoryId );

    return category;
}





}

module.exports = new categoryServices();