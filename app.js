const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/user', userRoutes);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

module.exports = app;