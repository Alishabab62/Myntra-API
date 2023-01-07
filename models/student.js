const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Student", studentSchema);
