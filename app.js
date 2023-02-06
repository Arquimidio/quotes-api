const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/user', userRoutes);
app.listen(PORT, () => console.log(`Listening at ${PORT}`));

module.exports = app;