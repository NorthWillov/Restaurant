const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: String,
        productType: String,
        name: String,
        quantity: Number,
        size: String,
        dough: String,
        removedIng: [String],
        extras: [],
        price: Number,
        image: String,
        first: String,
        second: String,
        meat: String,
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
