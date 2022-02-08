const mongoose = require("mongoose");

const makaronSchema = new mongoose.Schema({
  name: String,
  type: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model("Makaron", makaronSchema);
