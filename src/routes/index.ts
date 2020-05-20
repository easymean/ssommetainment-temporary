import * as express from "express";

const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/user", require("./user"));
router.use("/meeting", require("./meeting"));
router.use("/sommelier", require("./sommelier"));

module.exports = router;
