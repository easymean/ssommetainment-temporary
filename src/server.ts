import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log("listen to port 3000");
});

module.exports = server;