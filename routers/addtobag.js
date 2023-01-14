const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AddToBag = require("../models/addtobag");

router.post("/addtobag", async (req, res) => {
  const addToBag = new AddToBag({
    _id: new mongoose.Types.ObjectId(),
    user: req.body.user,
    imageLink: req.body.imageLink,
    brand: req.body.brand,
    productName: req.body.productName,
    price: req.body.price,
  });
  addToBag
    .save()
    .then((result) => {
      res.status(200).json({
        success: result,
      });
    })
    .catch((err) => {
      console.log("Hello");
    });
});

// api for get product

router.get("/addtobag/get/:user", async (req, res) => {
  AddToBag.find({ user: req.params.user })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        msg: err,
      });
    });
});

// api for delete

router.post("/addtobag/delete", async (req, res) => {
  console.log(req)
 AddToBag.findOneAndRemove({ user : req.body.user } && { _id : req.body.product })
    .then((result) => {
      console.log("hello succes");
      res.status(200).json({
        success: result,
      });
    })
    .catch((err) => {
      console.log("hello");
      res.status(404).json({
        message: err,
      });
    });
});

module.exports = router;
