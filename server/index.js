const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
const Promotion = require("./models/Promotion");
const Pizza = require("./models/Pizza");
const Lunch = require("./models/Lunch");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
const PizzaIngredient = require("./models/PizzaIngredient");

dotenv.config();

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://northwillov:${process.env.MONGO_PASSWORD}@cluster0.xhong.mongodb.net/riccardodb?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    app.listen(PORT, () => console.log(`Running on port ${PORT}...`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

app.use(express.static(path.join(__dirname, "client/build")));
app.set("trust proxy", 1); // trust first proxy

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.get("/api/getCart", async (req, res) => {
  await Cart.findById(req.session.cartId, (err, cart) => {
    if (err) return console.log(err);
    res.json(cart);
  });
});

app.get("/api/getPromos", async (req, res) => {
  await Promotion.find((err, promos) => {
    if (err) return console.log(err);
    res.json(promos);
  });
});

app.get("/api/getPizzas", async (req, res) => {
  await Pizza.find((err, pizzas) => {
    if (err) return console.log(err);
    res.json(pizzas);
  });
});

app.get("/api/getPizzaIngredients", async (req, res) => {
  await PizzaIngredient.find({}, (err, ingredients) => {
    if (err) return console.log(err);
    res.json(ingredients);
  });
});

app.get("/api/getLunches", async (req, res) => {
  await Lunch.find((err, lunches) => {
    if (err) return console.log(err);
    res.json(lunches);
  });
});

app.get("/api/getOrders", async (req, res) => {
  await Order.find((err, orders) => {
    if (err) return console.log(err);
    res.json(orders);
  });
});

app.post("/api/addProduct", jsonParser, async (req, res) => {
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

app.post("/cart/contactinfo", urlencodedParser, async (req, res) => {
  const cart = await Cart.findOne({ _id: req.session.cartId });
  const newOrder = {
    ...req.body,
    products: cart.products,
    totalamount: cart.products
      .map((product) => product.price * product.quantity)
      .reduce((a, b) => {
        return a + b;
      }, 0),
  };
  const order = new Order(newOrder);
  await order.save();
  await Cart.deleteOne({ _id: req.session.cartId });
  req.session = null;
  res.send("ZAMÓWIENIE ZOSTAŁO PRZYJĘTE DO REALIZACJI, DZIĘKUJEMY!");
  res.end();
});

app.put("/api/changeQuantity", jsonParser, async (req, res) => {
  await Cart.findByIdAndUpdate(
    req.session.cartId,
    {
      products: req.body.products,
    },
    (err, cart) => {
      if (err) throw new Error(err);
    }
  );
  res.end();
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

start();
