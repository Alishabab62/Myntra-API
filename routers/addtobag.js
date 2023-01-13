const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AddToBag = require("../models/addtobag");

router.post("/addtobag", async (req, res) => {
  const addToBag = new AddToBag({
    _id: new mongoose.Types.ObjectId(),
    userId: req.body.userId,
    imageLink: req.body.imageLink,
    brand: req.body.brand,
    productName: req.body.productName,
    price: req.body.price,
  });
  addToBag.save()
    .then((result) => {
      res.status(200).json({
        success: result,
      });
    })
    .catch((err) => {
      console.log("Hello");
    });
});


module.exports = router