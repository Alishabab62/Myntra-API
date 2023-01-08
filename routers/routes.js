const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const mongoose = require("mongoose");
const bcrypt=require('bcrypt');

router.get("/faculty", (req, res) => {
  Student.find().then((result) => {
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



router.put('/:id',(req,res)=>{
  Student.findOneAndUpdate({phone:req.params.id},{
    $set:{
      name: req.body.name,
      phone: req.body.phone,
      password:req.body.password
    }
  }).then((result)=>{
    res.status(200).json({
      result:result
    })
  }).catch((err)=>{
    console.log(err)
    res.status(500).json({
      error:err
    })
  })
})


// for storing password in normal form  

// router.post("/student", async (req, res) => {
  
//   const student = new Student({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     phone: req.body.phone,
//     password:req.body.password
//   });
//   const existingUser = await Student.findOne({ phone: req.body.phone });
//   if (!existingUser) {
//     student
//       .save()
//       .then((result) => {
//         console.log(result);
//         res.status(200).json({
//           success: true,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     console.log(req.body);
//   }
// });




// for storing passowrd in hash

router.post("/student",  (req, res) => {
  bcrypt.hash(req.body.password,10, async (err,hash)=>{
   if(err){
    return res.status(500).json({
      error:err
    })
   }
   else{
    const student = new Student({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      phone: req.body.phone,
      password:hash
    });
    const existingUser = await Student.findOne({ phone: req.body.phone });
    if (!existingUser) {
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
    } else {
      console.log(req.body);
    }
   }
  })
  
});






module.exports = router;
