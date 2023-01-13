const mongoose = require("mongoose");
const AddToBag = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  imageLink: {
    type: String,
    required: true,
    unique: true,
  },
  brand:{
    type:String,
    required:true
  },
  productName:{
    type:String,
    required:true
  },
  price: {
    type: Number,
    required: true,
  }
});


mongoose.set("strictQuery",false);
module.exports = mongoose.model("Addtobag" , AddToBag); 
