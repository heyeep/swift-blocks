const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deck');

router.get('/', deckController.listAll);
router.post('/', deckController.new);
router.get('/:id', deckController.get);
router.put('/:id', deckController.update);
router.delete('/:id', deckController.delete);

module.exports = router
