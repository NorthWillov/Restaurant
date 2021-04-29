const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: String,
  type: String,
  size: String,
  dough: String,
  price: {},
  ingredients: [String],
  image: String,
});

module.exports = mongoose.model("Pizza", pizzaSchema);
