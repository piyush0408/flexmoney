const express = require("express");
const { paymentInfo } = require("../controllers/paymentController");

const router = express.Router();

router.route("/payment").post(paymentInfo);

module.exports = router;
