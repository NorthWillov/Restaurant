const mongoose = require("mongoose");

const pizzaIngredientSchema = new mongoose.Schema({
  name: String,
  price: {},
});

module.exports = mongoose.model("PizzaIngredient", pizzaIngredientSchema);
