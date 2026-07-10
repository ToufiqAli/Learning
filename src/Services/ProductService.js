const Product = require("../model/products");
const Category = require('../model/category');

class ProductService {

    async createProduct(data) {
        const products = await Product.find({});
        const productId = `Pro${products.length+1}`;
        const existingProduct = await Product.findOne({
            productId: productId
        });

        if (existingProduct) {
            throw new Error("Product ID already exists");
        }

        if (data.sellingPrice > data.originalPrice) {
            throw new Error("Selling price cannot be greater than original price");
        }
        data.productId = productId;
        const product = await Product.create( data);
const addCategory = await Category.findOneAndUpdate(
  { categoryId: product.category }, 
  { $push: { Products: product._id } },
  { new: true } // Returns the updated document
);
        return product;
    }

    async GetProducts(){
        const products = await Product.find({});
        if(!products){
            return "There is No Products Available Currently";
        }
        else{
            return products;
        }
    }
 
    async GetOneProduct(productId){
        const product = await Product.findOne(productId);
        if(!product){
            throw new error ("The Product is Not There");
                
        }
        else{
            return product;
        }
        
    }

    async UpdateProduct(productId,updateData){
        const product = await Product.findOne(productId);
                if(!product){
            throw new error ("The Product is Not There");
                
        }else{
            const updateproduct = await Product.updateOne(
            productId,
            { $set: updateData }, 
            { new: true, runValidators: true }

            )
            return updateproduct;
        }
    }
    
    async DeleteProduct(productId){
               const product = await Product.findOne(productId);
                if(!product){
            throw new error ("The Product is Not There");
                
        }else{
            const deletedProduct = await Product.deleteOne(productId);
            return deletedProduct
    }

}

    async DeleteAllProducts(){
        try{
            const products = await Product.deleteMany({});
            return products;


        }catch(error){
            return error;
        }

    }
}

module.exports = new ProductService();