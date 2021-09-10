const express = require('express');
const router = expres.Router();
const cardController = require('../controllers/card');

router.get('/', cardController.listCards);
router.post('/', cardController.newCard);
router.get('/:id', cardController.getCard);
router.put('/:id', cardController.updateCard);
