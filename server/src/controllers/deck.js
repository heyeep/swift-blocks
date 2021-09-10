const Deck = require('../models/deck');

exports.listAll = (req, res) => {
  Deck.find()
      .then(decks => {
        res.json(decks);
      }).catch(err => {
        res.status(500).send({
          message: err.message || 'No errors found.'
        });
      });
};

exports.new = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: 'Title cannot be empty' });
    return;
  }

  const newDeck = new Deck({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    tags: req.body.tags
  });

  newDeck
    .save(newDeck)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error creating Deck'
      });
    });
};

exports.get = (req, res) => {
};

exports.update = (req, res) => {
};

exports.delete = (req, res) => {
};
