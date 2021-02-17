const { Router } = require("express");
// const greet = require("./greet");
// const joke = require("./joke");

const v1 = Router();

// v1.use("/greet", greet);
// v1.use("/joke", joke);
v1.use("*", (req, res) => {
  res.send("404 page Not found");
});

module.exports = v1;