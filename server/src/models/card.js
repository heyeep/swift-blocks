const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  sourceCode: String,
  language: String,
  tags: [String]
}, {
  timestamps: true
});

module.exports = Card = mongoose.model('Card', CardSchema);
