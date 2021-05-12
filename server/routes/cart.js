const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Cart = require("../models/Cart");

const jsonParser = bodyParser.json();

router.get("/api/getCart", async (req, res) => {
  await Cart.findById(req.session.cartId, (err, cart) => {
    if (err) return console.log(err);
    res.json(cart);
  });
});

router.post("/api/addProduct", jsonParser, async (req, res) => {
  const { product } = req.body;
  if (!req.session.cartId) {
    const cart = new Cart({
      products: [product],
    });
    await cart.save();
    req.session.cartId = cart._id;
  } else {
    try {
      const cart = await Cart.findOne({ _id: req.session.cartId });
      cart.products = [...cart.products, product];
      await cart.save();
    } catch (err) {
      console.log("CART NOT FOUND");
      req.session = null;
    }
  }
  res.end();
});

router.put("/api/incrementProductQuantity", jsonParser, async (req, res) => {
  const cart = await Cart.findOne({ _id: req.session.cartId });
  let newProducts = [];

  cart.products.map((product) => {
    if (product._id.toString() === req.body.productId) {
      const newProd = product;
      newProd.quantity++;
      newProducts.push(newProd);
    } else {
      newProducts.push(product);
    }
  });

  await Cart.findByIdAndUpdate(
    req.session.cartId,
    {
      products: newProducts,
    },
    (err, cart) => {
      if (err) throw new Error(err);
    }
  );
  res.end();
});

router.put("/api/decrementProductQuantity", jsonParser, async (req, res) => {
  const cart = await Cart.findOne({ _id: req.session.cartId });
  let newProducts = [];

  cart.products.map((product) => {
    if (product._id.toString() === req.body.productId) {
      const newProd = product;
      newProd.quantity--;

      newProd.quantity !== 0 && newProducts.push(newProd);
    } else {
      newProducts.push(product);
    }
  });

  await Cart.findByIdAndUpdate(
    req.session.cartId,
    {
      products: newProducts,
    },
    (err, cart) => {
      if (err) throw new Error(err);
    }
  );
  res.end();
});

module.exports = router;
