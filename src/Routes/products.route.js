const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products.controller");

router.post("/create", ProductController.createProduct);

module.exports = router;