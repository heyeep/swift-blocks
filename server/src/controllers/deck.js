const Deck = require('../models/deck');

exports.listAll = (req, res) => {
  const title = req.query.title;
  console.log(title);
  res.json({'test': 'test'})
};

exports.new = (req, res) => {
};

exports.get = (req, res) => {
};

exports.update = (req, res) => {
};

exports.delete = (req, res) => {
};
