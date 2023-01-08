const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password:{
    type:String,
    required:true
  }
});
mongoose.set('strictQuery', false);
module.exports = mongoose.model("Student", studentSchema);
