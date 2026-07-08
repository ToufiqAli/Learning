const ProductService = require("../services/ProductService");

class ProductController {

    async createProduct(req, res, next) {

        try {

            const product = await ProductService.createProduct(req.body);

            return res.status(201).json({
                success: true,
                message: "Product created successfully",
                data: product
            });

        } catch (error) {
            next(error);
        }

    }
    async GetProducts(req,res,next){
        try{
            const Products = await ProductService.GetProducts();

            return res.status(200).json({

                Status:"Success",
                data : Products
            })
        }catch(error){
            next(error);
        }
        }
        
    async GetOneProduct(req,res,next){
        try{
            const Product = await ProductService.GetOneProduct(req.params);            
        
            return res.status(200).json({

                Status:"Success",
                data : Product
            })
        }catch(error){
            next(error)
        }
        
    }

    async UpdateProduct(req,res,next){
        try{
        const Product = await ProductService.UpdateProduct(req.params,req.body);            
 
               return res.status(200).json({
                Status:"Success",
                message:"The Product Data has Been Updated",
                data : Product
            })
        }catch(error)
        {
            next(error);
        }
    }
    async DeleteProduct(req,res,next){
     try{
        const Product = await ProductService.DeleteProduct(req.params);            
 
               return res.status(200).json({
                Status:"Success",
                message:`The Product has Been Deleted`,
                data : Product
            })
        }catch(error)
        {
            next(error);
        }
    }
    async DeleteAllProducts(req,res,next){
         try{
        const Product = await ProductService.DeleteAllProducts();            
 
               return res.status(200).json({
                Status:"Success",
                message:`The Products has Been Deleted`,
                data : Product
            })
        }catch(error)
        {
            next(error);
        }

    }


    }



module.exports = new ProductController();