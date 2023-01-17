const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/product");

router.post("/post", async (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    imageLink: req.body.imageLink,
    brand: req.body.brand,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    product: req.body.product, 
  });
  const existingProduct= await Product.findOne({imageLink:req.body.imageLink});
  if(!(existingProduct)){
    product.save().then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
      });
    }).catch((err)=>{
      console.log(err) 
    });
  }
  else{
    res.status(404).json({
      message:"Alreay Present"
    })
  }
 
});


router.get("/get/:cat", async (req, res) => {
  await Product.find({product:req.params.cat}).then((result) => {
    res.status(200).json({
      products: result,
    });
  });
});

module.exports = router;
