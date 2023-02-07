const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const quotesRoutes = require('./routes/quotes');

app.use(express.json());
app.use('/user', userRoutes);
app.use('/quotes', quotesRoutes);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

module.exports = app;