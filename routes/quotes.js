const express = require('express');
const router = express.Router();
const quotesControllers = require('../controllers/quotes');

router.route('/')
  .get(quotesControllers.getQuotes)
  .post(quotesControllers.postQuote)

module.exports = router;