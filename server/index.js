const express = require('express');
const path = require('path');
const api = require('./helpers');
require('dotenv').config();
// all keys in .env file available as variables
// process.env.GITHUB_AUTH_KEY available for requests!

const app = express();
// const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/:category', (req, res) => {
  api.get(req.params.category)
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(err));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
