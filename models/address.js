const mongoose = require("mongoose");
const Address = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
  },
  address_user: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  address_type: {
    type: String,
  },
  user_id: {
    type: Number,
    required: true,
  },
});
mongoose.set("strictQuery", false);
module.exports = mongoose.model("Address", Address);
