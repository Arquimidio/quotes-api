const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const DB = require('./db/DBAccess');

app.use(express.json());
app.listen(PORT, () => console.log(`Listening at ${PORT}`));