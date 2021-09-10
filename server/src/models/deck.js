const mongoose = require('mongoose');
const CardSchema = require('./card');

const DeckSchema = mongoose.Schema({
  title: String,
  cards: [CardSchema.schema]
})

moduleExports = Deck = mongoose.model('deck', DeckSchema);
