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

/* ----------------------------- BENEFICIARY GET ---------------------------- */
router.post("/beneficiary/get", (req, res) => {
  res.json(data.beneficiaryGet);
});

/* ---------------------------- GET CORPORATE SOF --------------------------- */
router.post("/getcorporatesof", (req, res) => {
  res.json(data.getCorporateSof);
});

/* ---------------------------- CASHFLOW BY MONTH --------------------------- */
router.post("/cashflowbymonth", (req, res) => {
  const cashflowType = req.body.sign; // "C" for in && "D" for out
  const resData =
    cashflowType === "C" ? data.cashflowByMonthIn : data.cashflowByMonthOut;

  res.json(resData);
});

/* --------------------------- BENEFICIARY INQUIRY -------------------------- */
router.post("/beneficiary/inquiry", (req, res) => {
  res.json(data.beneficiaryInquiry);
});

module.exports = router;
