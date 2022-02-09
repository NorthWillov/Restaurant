const express = require("express")
const router = express.Router()
const Lunch = require("../models/Lunch")

router.get("/api/fetchLunches", async (req, res) => {
  await Lunch.find((err, lunches) => {
    if (err) return console.log(err)
    res.json(lunches)
  }).clone()
})

module.exports = router
