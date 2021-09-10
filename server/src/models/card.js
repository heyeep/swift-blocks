const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CardSchema = new Schema({
  title: String,
  author: String,
  description: String,
  sourceCode: String,
  language: String,
  tags: [String]
}, {
  timestamps: true
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card
