const express = require("express")
const router = express.Router()
const Makaron = require("../models/Makaron")

router.get("/api/fetchMakarons", async (req, res) => {
  await Makaron.find((err, makarons) => {
    if (err) return console.log(err)
    res.json(makarons)
  }).clone()
})

module.exports = router
