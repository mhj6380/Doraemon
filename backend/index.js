var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");

if (process.env.NODE_ENV === "test") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/users", user);

module.exports = app;
