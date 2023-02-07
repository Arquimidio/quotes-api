const QueryDB = require('../db/QueryDB');

const getQuotes = async (req, res) => {
  try {
    const allQuotes = await QueryDB.getQuotes();
    res.status(200).json(allQuotes);
  } catch(error) {
    console.log(error);
    res.status(403).json({ error: 'unauthorized' })
  }
}

const postQuote = async (req, res) => {
  const { body: newQuote } = req;
  try {
    const id = await QueryDB.postQuote(newQuote);
    res.status(201).json(id);
  } catch(error) {
    console.log(error);
    res.status(403).json({ error: 'unauthorized' })
  }
}

const updateQuote = async (req, res) => {
  const { quoteId } = req.params;
  const { quote } = req.body;
  
  try {
    const updatedQuote = await QueryDB.updateQuote(quoteId, quote);
    res.status(204).json(updatedQuote);
  } catch(error) {
    console.log(error);
    res.status(403).json({ error: 'unauthorized' })
  }
}

const deleteQuote = async (req, res) => {
  const { quoteId } = req.params;
  try {
    await QueryDB.deleteQuote(quoteId);
    res.status(204).end();
  } catch(error) {
    console.log(error);
    res.status(403).json({ error: 'unauthorized' })
  }
}

module.exports = {
  getQuotes,
  postQuote,
  updateQuote,
  deleteQuote
}