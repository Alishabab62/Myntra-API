const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const mongoose = require("mongoose");

router.get("/faculty", (req, res) => {
  Student.find(req.params.phone).then((result) => {
    res.status(200).json({
      studentData: result,
    });
  });
});

router.get("/faculty/:phone/:name", (req, res) => {
  console.log(req.params.id);
  Student.findOne({ phone: req.params.phone }, { name: req.params.name }).then(
    (result) => {
      res.status(200).json({
        studentData: result,
      });
    }
  );
});

router.delete("/faculty/:id", (req, res) => {
  Student.remove({ phone: req.params.id }).then((result) => {
    res.status(200).json({
      msg: "Deleted",
      result: result,
    });
  });
});

router.post("/student", (req, res) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    phone: req.body.phone,
  });
  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
