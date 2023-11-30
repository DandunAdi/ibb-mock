const express = require("express");
const data = require("./data");
const router = express.Router();

/* ---------------------- GET COUNT NOTIFICATION UNSEEN --------------------- */
router.post("/getcountnotificationunseen", (req, res) => {
  res.json(data.getCountNotificationUnseen);
});

module.exports = router;
