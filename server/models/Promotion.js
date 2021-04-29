const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
});

module.exports = mongoose.model("Promotion", promotionSchema);
