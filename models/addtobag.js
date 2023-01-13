const mongoose = require("mongoose");
const AddToBag = new mongoose.Schema({
  user: {
    type: Number,
  },
  imageLink: {
    type: String,
    unique:true,
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
module.exports = mongoose.model("AddToBag" , AddToBag); 
