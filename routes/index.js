const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

router.get("/:urlCode", async (req, res) => {
  try {
    let url = await Url.findOne({ urlCode: req.params.urlCode });

    if (url) {
      url.hitCount = url.hitCount + 1;
      url.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No url found...");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error...");
  }
});

module.exports = router;
