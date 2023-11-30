const express = require("express");
const data = require("./data");
const router = express.Router();

/* ----------------------------- CORPORATE LOGIN ---------------------------- */
router.post("/getdashboardwithchart", (req, res) => {
  res.json(data.getDashboardWithChart);
});

module.exports = router;
