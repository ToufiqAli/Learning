const Product = require("../model/products");
const Category = require('../model/category');

class ProductService {

    async createProduct(data) {
        const products = await Product.find({});
        const productId = `Pro${products.length+1}`;
        const existingProduct = await Product.findOne({
            productId: productId
        });
         data.productId = productId;

        if (existingProduct) {
            throw new Error("Product ID already exists");
        }

        if (data.sellingPrice > data.originalPrice) {
            throw new Error("Selling price cannot be greater than original price");
        }
        const addCategory = await Category.findOneAndUpdate(
        { categoryId: data.category }, 
        { $push: { Products:data.productId} },
        { new: true } // Returns the updated document
        );
        if(!addCategory){
            throw new Error ("First Create the Category");
        }


        const product = await Product.create(data);
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
       
            const updateproduct = await Product.updateOne(
            productId,
            { $set: updateData }, 
            { new: true, runValidators: true }

            )
              if(!updateproduct){
            throw new Error ("The Product is Not Present");
        }

            return updateproduct;
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