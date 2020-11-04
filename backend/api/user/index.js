// 라우팅 설정
const { request } = require("express");
const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.get("/", ctrl.index);

router.get("/:id", ctrl.show);

router.delete("/:id", ctrl.destroy);

router.post("/", ctrl.create);

router.put("/:id", ctrl.edit);

module.exports = router;
