const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongooseDB = require('./config/db.conf.js');

const winston = require('winston')
const expressWinston = require('express-winston')

const deckRoutes = require('./routes/deck');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: false,
  msg: 'HTTP ',
  expressFormat: false,
  colorize: true,
  // Ignore logging for now
  ignoreRoute: function (req, res) { return true; }
}));

app.use('/api/decks', deckRoutes)

mongoose.Promise = global.Promise;

mongoose.connect(mongooseDB, {
  useNewUrlParser: true
}).then(() => {
  console.log('Connected to database.');
}).catch(err => {
  console.log('Failed to connect to database.');
//  process.exit();
})

app.get('/', (req, res) => {
  res.json({'test': 'test'})
})

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
})
