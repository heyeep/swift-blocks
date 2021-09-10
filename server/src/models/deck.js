const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CardSchema = require('./card');

const DeckSchema = new Schema({
  title: String,
  author: String,
  description: String,
  cards: [CardSchema.schema],
  tags: [String],
})


const Deck = mongoose.model('deck', DeckSchema);

module.exports = Deck;
