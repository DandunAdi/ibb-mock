const express = require("express");
const data = require("./data");
const router = express.Router();

/* ------------------------- DELETING MASS TRANSFER ------------------------- */
router.post("/deletingmasstransfer", (req, res) => {
  res.json(data.deletingMassTransfer);
});

/* ----------------------------- INQUIRY ACCOUNT ---------------------------- */
router.post("/inquiry/account", (req, res) => {
  res.json(data.inquiryAccount);
});

/* ---------------------------- SAVE LIST ACCOUNT --------------------------- */
router.post("/savelistpayroll", (req, res) => {
  res.json(data.saveListPayroll);
});

module.exports = router;
