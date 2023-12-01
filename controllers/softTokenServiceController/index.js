const express = require("express");
const data = require("./data");
const router = express.Router();

/* --------------------------- GENERATE SOFT TOKEN -------------------------- */
router.post("/generateSoftToken", (req, res) => {
  res.json(data.generateSoftToken);
});

module.exports = router;
