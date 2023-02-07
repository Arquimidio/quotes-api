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
    await QueryDB.postQuote(newQuote);
    res.status(201).end();
  } catch(error) {
    console.log(error);
    res.status(403).json({ error: 'unauthorized' })
  }
}

module.exports = {
  getQuotes,
  postQuote
}