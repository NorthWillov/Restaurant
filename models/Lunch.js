const mongoose = require("mongoose");

const lunchSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  image: String,
  first: String,
  second: String,
  meat: String,
});

module.exports = mongoose.model("Lunch", lunchSchema);
