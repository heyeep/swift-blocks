const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CardSchema = require('./card');

const DeckSchema = new Schema({
  title: String,
  cards: [CardSchema.schema]
})


const Deck = mongoose.model('deck', DeckSchema);

module.exports = Deck;
