"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.use("/auth", require("./auth"));
router.use("/user", require("./user"));
router.use("/meeting", require("./meeting"));
router.use("/sommelier", require("./sommelier"));
module.exports = router;
