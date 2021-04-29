const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    deliveryoption: String,
    time: String,
    nameandsurname: String,
    phonenumber: Number,
    email: String,
    street: String,
    streetnumber: Number,
    town: String,
    flat: Number,
    floor: Number,
    note: String,
    payment: String,
    products: [],
    totalamount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
