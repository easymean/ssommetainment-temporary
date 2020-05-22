import * as express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user 이후 url");
});

router.get("/signup", (req, res) => {
  res.render("user/signup.html", {
    message: "hello",
  });
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
