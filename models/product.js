const mongoose = require("mongoose");
const Product = new mongoose.Schema({
  imageLink: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
});
mongoose.set("strictQuery", false);
module.exports = mongoose.model("Products", Product);
