const express = require("express");
const data = require("./data");
const router = express.Router();

/* ---------------------------- INQUIRY TRANSFER ---------------------------- */
router.post("/inquirytransfer", (req, res) => {
  res.json(data.inquiryTransfer);
});

/* ---------------------------- EXECUTE TRANSFER ---------------------------- */
router.post("/executetransfer", (req, res) => {
  res.json(data.inquiryTransfer);
});

/* ------------------------------ GET BANK LIST ----------------------------- */
router.post("/getbanklist", (req, res) => {
  res.json(data.getBankList);
});

module.exports = router;
