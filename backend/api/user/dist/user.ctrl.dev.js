"use strict";

var models = require("../../models"); // var users = [
//   { id: 1, name: "hakgu" },
//   { id: 2, name: "hakgu2" },
//   { id: 3, name: "hakgu3" },
// ];
// api


var index = function index(req, res) {
  // req.query.limit 있을 경우 그대로 사용, 없을경우 기본값 10으로 설정
  req.query.limit = req.query.limit || 10;
  var limit = parseInt(req.query.limit, 10);

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  models.User.findAll({}).then(function (users) {
    res.json(users);
  }); // res.json(users.slice(0, limit));
};

var show = function show(req, res) {
  var id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  var user = users.filter(function (user) {
    return user.id === id;
  })[0];
  if (!user) return res.status(404).end();
  res.json(user);
};

var destroy = function destroy(req, res) {
  var id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  users = users.filter(function (user) {
    return user.id !== id;
  });
  res.status(204).end();
};

var create = function create(req, res) {
  var name = req.body.name;
  if (!name) return res.status(400).end();
  var isConflict = users.filter(function (user) {
    return user.name === name;
  }).length;
  if (isConflict) return res.status(409).end();
  var id = Date.now();
  var user = {
    id: id,
    name: name
  };
  users.push(user);
  res.status(201).json(user);
};

var edit = function edit(req, res) {
  var id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  var name = req.body.name;
  if (!name) return res.status(400).end();
  var isConflict = users.filter(function (user) {
    return user.name === name;
  }).length;
  if (isConflict) return res.status(409).end();
  var user = users.filter(function (user) {
    return user.id === id;
  })[0];
  if (!user) return res.status(404).end();
  user.name = name;
  res.json(user);
};

module.exports = {
  index: index,
  show: show,
  destroy: destroy,
  create: create,
  edit: edit
};