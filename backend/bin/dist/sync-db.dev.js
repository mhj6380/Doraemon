"use strict";

var models = require("../models");

module.exports = function () {
  return models.sequelize.sync({
    force: true
  });
};