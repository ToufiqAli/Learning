const Product = require("../model/products");
const Category = require('../model/category');
const crypto = require('crypto');

class ProductService {

    async createProduct(data) {
        const products = await Product.find({});
        const productId = `Pro_${crypto.randomBytes(4).toString('hex')}`;   
        const existingProduct = await Product.findOne({
            productId: productId
        });

        if (existingProduct) {
            throw new Error("Product ID already exists");
        }

        if (data.sellingPrice > data.originalPrice) {
            throw new Error("Selling price cannot be greater than original price");
        }
        
        const category = await Category.findOne({_id:data.category})
        console.log(category)
        if(!category){
            throw new Error ("First Create the Category");
        }
        
        data.productId = productId;
        const product = await Product.create(data);
const addCategory = await Category.findOneAndUpdate(
  {_id:data.category}, 
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
        const product = await Product.findOne({_id:productId.productId});
        if(!product){
            throw new error ("The Product is Not There");
                
        }
        else{
            return product;
        }
        
    }

    async UpdateProduct(productId,updateData){
       
            const updateproduct = await Product.findOneAndUpdate(
            {_id:productId.productId},
            { $set: updateData }, 
            { new: true, runValidators: true }

            )
              if(!updateproduct){
            throw new Error ("The Product is Not Present");
        }

            return updateproduct;
        }
    

    
    async DeleteProduct(productId){
            const product = await Product.findOne({_id:productId.productId});
                if(!product){
            throw new error ("The Product is Not There");
                
        }else{
            await Category.findOneAndUpdate(
                {_id:product.category},
                {$pull: {Products:productId.productId} }
            )
            
            const deletedProduct = await Product.deleteOne({_id:productId.productId});
            return deletedProduct
    }

}

    async DeleteAllProducts(){
        try{
            await Category.updateMany(
                {},
                {$set:{Products:[]}}
            )
            const result = await Product.deleteMany({});
            return result;

        }catch(error){
            return error;
        }

    }
}

module.exports = new ProductService();