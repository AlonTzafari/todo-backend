"use strict"
const express = require("express");
const app = require("./app");

const PORT = 3000;

const server = express();
server.use("/", app);
server.listen(PORT);