const express = require("express");
const data = require("./data");
const router = express.Router();

/* ------------------------ GET DASHBOARD WITH CHART ------------------------ */
router.post("/getdashboardwithchart", (req, res) => {
  res.json(data.getDashboardWithChart);
});

/* ------------------------ GET ALL CORPORATE ACCOUNT ----------------------- */
router.post("/getallcorporateaccount", (req, res) => {
  res.json(data.getAllCorporateAccount);
});

module.exports = router;
