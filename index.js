const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieSession = require("cookie-session")
const Promotion = require("./models/Promotion")
const Lunch = require("./models/Lunch")
const Cart = require("./models/Cart")
const Order = require("./models/Order")
const Makaron = require("./models/Makaron")

const pizzaRoutes = require("./routes/pizza")
const cartRoutes = require("./routes/cart")

dotenv.config()

const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()
const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://northwillov:${process.env.MONGO_PASSWORD}@cluster0.xhong.mongodb.net/riccardodb?retryWrites=true&w=majority`
    )
    app.listen(PORT, () => console.log(`Running on port ${PORT}...`))
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

app.set("trust proxy", 1) // trust first proxy

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
)

app.use(pizzaRoutes)
app.use(cartRoutes)

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "dist")))

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"))
  })
}

app.get("/api/getPromos", async (req, res) => {
  await Promotion.find((err, promos) => {
    if (err) return console.log(err)
    res.json(promos)
  }).clone()
})

app.get("/api/fetchLunches", async (req, res) => {
  await Lunch.find((err, lunches) => {
    if (err) return console.log(err)
    res.json(lunches)
  }).clone()
})

app.get("/api/fetchMakarons", async (req, res) => {
  await Makaron.find((err, makarons) => {
    if (err) return console.log(err)
    res.json(makarons)
  }).clone()
})

app.get("/api/getOrders", async (req, res) => {
  await Order.find((err, orders) => {
    if (err) return console.log(err)
    res.json(orders)
  }).clone()
})

app.post("/api/createOrder", jsonParser, async (req, res) => {
  try {
    const cart = await Cart.findOne({ _id: req.session.cartId })
    const newOrder = {
      ...req.body.contactInfo,
      products: cart.products,
      totalamount: cart.products.reduce(
        (acc, el) => acc + el.price * el.quantity,
        0
      ),
    }
    const order = new Order(newOrder)
    await order.save()
    await Cart.deleteOne({ _id: req.session.cartId })
    req.session = null
    res.end()
  } catch (err) {
    console.log(err)
  }
})

start()
