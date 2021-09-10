const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
  title: String,
  author: String,
  description: String,
  sourceCode: String,
  language: 'python'
}, {
  timestamps: true
});

module.exports = mongoose.model('Card', CardSchema);
