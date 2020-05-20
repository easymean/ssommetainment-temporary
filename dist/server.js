"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var server = app_1.default.listen(app_1.default.get("port"), function () {
    console.log("listen to port 3000");
});
module.exports = server;
