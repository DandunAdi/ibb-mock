const express = require("express");
const data = require("./data");
const router = express.Router();

/* ---------------------------- INQUIRY TRANSFER ---------------------------- */
router.post("/inquirytransfer", (req, res) => {
  res.json(data.inquiryTransfer);
});

/* ---------------------------- EXECUTE TRASNFER ---------------------------- */
router.post("/executetransfer", (req, res) => {
  res.json(data.inquiryTransfer);
});

module.exports = router;
