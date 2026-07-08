const Product = require("../model/products");

class ProductService {

    async createProduct(data) {
        const products = await Product.find({});
        const productId = `Pro${products.length}`;
        console.log(productId)
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
        const product = await Product.create(  data
        );

        return product;
    }

}

module.exports = new ProductService();