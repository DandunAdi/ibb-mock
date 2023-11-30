const express = require("express");
const data = require("./data");
const router = express.Router();

/* ----------------------------- CORPORATE LOGIN ---------------------------- */
router.post("/corporatelogin", (req, res) => {
  res.set("access_token", "d35cece3-9745-4e2b-9c41-59b735238cac");
  res.json(data.corporateLogin);
});

module.exports = router;
