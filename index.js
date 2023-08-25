const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");

const pizzaRoutes = require("./routes/pizza");
const cartRoutes = require("./routes/cart");
const lunchRoutes = require("./routes/lunch");
const makaronRoutes = require("./routes/makaron");
const orderRoutes = require("./routes/order");
const promoRoutes = require("./routes/promo");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://northwillov:${process.env.MONGO_PASSWORD}@cluster0.xhong.mongodb.net/riccardodb?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`Running on port ${PORT}...`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.use(pizzaRoutes);
app.use(cartRoutes);
app.use(lunchRoutes);
app.use(makaronRoutes);
app.use(orderRoutes);
app.use(promoRoutes);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "dist")));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}

start();
