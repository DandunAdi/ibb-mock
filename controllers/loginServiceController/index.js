const express = require("express");
const data = require("./data");
const router = express.Router();

/* ----------------------------- CORPORATE LOGIN ---------------------------- */
router.post("/corporatelogin", (req, res) => {
  res.set("access_token", "d35cece3-9745-4e2b-9c41-59b735238cac");
  res.set("content-type", "application/json;charset=UTF-8");
  res.set("expire", "900");
  res.json(data.corporateLogin);
});

module.exports = router;
