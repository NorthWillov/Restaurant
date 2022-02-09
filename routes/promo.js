const express = require("express")
const router = express.Router()
const Promotion = require("../models/Promotion")

router.get("/api/getPromos", async (req, res) => {
  await Promotion.find((err, promos) => {
    if (err) return console.log(err)
    res.json(promos)
  }).clone()
})

module.exports = router
