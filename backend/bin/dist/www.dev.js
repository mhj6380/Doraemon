"use strict";

var app = require("../index");

var syncDb = require("./sync-db");

var colors = require("colors");

syncDb().then(function (_) {
  console.log("Sync DB".underline.red);
  app.listen(4000, function () {
    console.log("P L A Y M A N G O".rainbow.bold); // Drops the bass
  });
});