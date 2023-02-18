const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Address = require("../models/address");

router.post("/address", async (req, res) => {
  const address = new Address({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    mobile_no: req.body.mobile_no,
    address_user: req.body.address_user,
    locality: req.body.locality,
    city: req.body.city,
    state: req.body.state,
    pinCode: req.body.pinCode,
    address_type: req.body.address_type,
    user_id: req.body.user_id,
  });
  const existingAddress = await Address.findOne({
    locality: req.body.locality,
  });
  if (!existingAddress) {
    await address
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(404).json({
          error: error,
        });
      });
  }
});

router.get("/address/get/:user", async (req, res) => {
  await Address.find({ mobile_no: req.params.user })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        result: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({
        message: error,
      });
    });
});

router.put("/address/edit/:id", async (req, res) => {
  Address.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        mobile_no: req.body.mobile_no,
        address_user: req.body.address_user,
        locality: req.body.locality,
        city: req.body.city,
        state: req.body.state,
        pinCode: req.body.pinCode,
        address_type: req.body.address_type,
        user_id: req.body.user_id,
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        result: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({
        error: error,
      });
    });
});

router.delete("/address/delete/:id", async (req, res) => {
  Address.remove({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "Deleted",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({
        error: error,
      });
    });
});
module.exports = router;
