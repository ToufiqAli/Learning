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

}

module.exports = new ProductController();