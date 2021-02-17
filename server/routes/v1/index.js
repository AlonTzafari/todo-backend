const { Router } = require("express");
const bin = require("./bin");

const v1 = Router();

v1.use("/b", bin);

module.exports = v1;