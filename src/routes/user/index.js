const { Router } = require("express");
const router = Router();

const testMiddleware = (req, res, next) => {
  console.log("first middleware");
  next();
};

const testMiddleware2 = (req, res, next) => {
  console.log("second middleware");
  next();
};

// const loginRequired = (req,res,next) =>{
//   if(로그인 ㄴㄴ){
//     res.redirect('로그인 창으로')
//   }else{
//     next();
//   }
// }

//user controllers
router.get("/", testMiddleware, testMiddleware2, (req, res) => {
  res.send("hello");
});

router.get("/signup", (req, res) => {
  const user = req.body;
  console.log(user);
});

router.post("/login", (req, res) => {
  const user = req.body;
  console.log(user);
});

router.get("/login", (req, res) => {
  res.render("user/login.html", {
    message: "hello",
  });
});

router.put(`/`, (req, res) => {
  res.send("유저 정보를 수정합니다. ");
});

module.exports = router;
