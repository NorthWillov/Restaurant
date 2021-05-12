const express = require("express");
const router = express.Router();
const Pizza = require("../models/Pizza");
const PizzaIngredient = require("../models/PizzaIngredient");

router.get("/api/getPizzas", async (req, res) => {
  await Pizza.find((err, pizzas) => {
    if (err) return console.log(err);
    res.json(pizzas);
  });
});

router.get("/api/getPizzaIngredients", async (req, res) => {
  await PizzaIngredient.find({}, (err, ingredients) => {
    if (err) return console.log(err);
    res.json(ingredients);
  });
});

module.exports = router;
