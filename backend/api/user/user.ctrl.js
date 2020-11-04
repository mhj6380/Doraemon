const models = require("../../models");

// var users = [
//   { id: 1, name: "hakgu" },
//   { id: 2, name: "hakgu2" },
//   { id: 3, name: "hakgu3" },
// ];

// api
const index = (req, res) => {
  // req.query.limit 있을 경우 그대로 사용, 없을경우 기본값 10으로 설정
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  models.User.findAll({}).then((users) => {
    res.json(users);
  });

  // res.json(users.slice(0, limit));
};

const show = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const user = users.filter((user) => user.id === id)[0];
  if (!user) return res.status(404).end();

  res.json(user);
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  users = users.filter((user) => user.id !== id);
  res.status(204).end();
};

const create = (req, res) => {
  const name = req.body.name;

  if (!name) return res.status(400).end();

  const isConflict = users.filter((user) => user.name === name).length;
  if (isConflict) return res.status(409).end();

  const id = Date.now();
  const user = { id, name };
  users.push(user);
  res.status(201).json(user);
};

const edit = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();
  const isConflict = users.filter((user) => user.name === name).length;
  if (isConflict) return res.status(409).end();

  const user = users.filter((user) => user.id === id)[0];
  if (!user) return res.status(404).end();

  user.name = name;
  res.json(user);
};

module.exports = {
  index,
  show,
  destroy,
  create,
  edit,
};
