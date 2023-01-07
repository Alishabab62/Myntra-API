const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const mongoose = require("mongoose");

router.post("/product", (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    imageLink: req.body.imageLink,
    brand: req.body.brand,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    product: req.body.product,
  });

  product.save().then((result) => {
    console.log(result);
    res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
