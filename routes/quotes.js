const express = require('express');
const router = express.Router();
const quotesControllers = require('../controllers/quotes');

router.route('/')
  .get(quotesControllers.getQuotes)
  .post(quotesControllers.postQuote)

router.route('/:quoteId')
  .put(quotesControllers.updateQuote)
  .delete(quotesControllers.deleteQuote)

module.exports = router;