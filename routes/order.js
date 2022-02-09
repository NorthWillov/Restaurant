const express = require("express")
const router = express.Router()
const Order = require("../models/Order")
const Cart = require("../models/Cart")
const bodyParser = require("body-parser")

const jsonParser = bodyParser.json()

router.get("/api/getOrders", async (req, res) => {
  await Order.find((err, orders) => {
    if (err) return console.log(err)
    res.json(orders)
  }).clone()
})

router.post("/api/createOrder", jsonParser, async (req, res) => {
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

module.exports = router
