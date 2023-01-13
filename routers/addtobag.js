const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AddToBag = require("../models/Addtobag");

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

router.get("/addtobag/get", async (req, res) => {
  AddToBag.find({ userId: req.params.userId })
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

router.delete("/addtobag/update/:user/:product", (req, res) => {
  AddToBag.remove({ userId: req.params.user }, { _id: req.params.product })
    .then((result) => {
      console.log("hello");
      res.status(200).json({
        success: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: err,
      });
    });
});

module.exports = router;
