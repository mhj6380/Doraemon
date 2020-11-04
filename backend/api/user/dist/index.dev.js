"use strict";

// 라우팅 설정
var _require = require("express"),
    request = _require.request;

var express = require("express");

var router = express.Router();

var ctrl = require("./user.ctrl");

router.get("/", ctrl.index);
router.get("/:id", ctrl.show);
router["delete"]("/:id", ctrl.destroy);
router.post("/", ctrl.create);
router.put("/:id", ctrl.edit);
module.exports = router;