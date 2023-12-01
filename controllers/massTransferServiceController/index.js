const express = require("express");
const data = require("./data");
const router = express.Router();

/* ------------------------- DELETING MASS TRANSFER ------------------------- */
router.post("/deletingmasstransfer", (req, res) => {
  res.json(data.deletingMassTransfer);
});

router.post("/inquiry/account", (req, res) => {
  res.json(data.inquiryAccount);
});

module.exports = router;
