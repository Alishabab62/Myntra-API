const express = require("express");
const app = express();
const cors= require('cors');
const bodyParser = require("body-parser");
const student = require("./routers/routes");
const product = require("./routers/product");
const addToBag = require("./routers/addtobag");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://alishabab62:alishabab6569@cluster0.udpfyhx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/school", student);
app.use("/myntra", product);
app.use("/myntra", addToBag);

app.use((req, res) => {
  res.status(404).json({
    error: "bad request",
  });
});

module.exports = app;
