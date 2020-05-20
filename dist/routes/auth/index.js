"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
// const loginRequired = (req,res,next) =>{
//   if(로그인 ㄴㄴ){
//     res.redirect('로그인 창으로')
//   }else{
//     next();
//   }
// }
//auth controllers
router.post("/login", function (req, res) {
    var user = req.body;
    var email = user.email;
    var password = user.password;
    res.json({
        result: true,
    });
});
router.get("/logout", function (req, res) {
    console.log("success");
});
module.exports = router;
