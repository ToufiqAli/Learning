const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products.controller");
const productsController = require("../controllers/products.controller");

router.post("/create", ProductController.createProduct);
router.get("/",productsController.GetProducts);
router.get("/:productId",ProductController.GetOneProduct);
router.put("/:productId",ProductController.UpdateProduct);
router.delete("/:productId",ProductController.DeleteProduct);
router.delete("/",ProductController.DeleteAllProducts);


module.exports = router;