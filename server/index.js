const express = require('express');
const path = require('path');
const api = require('./helpers');
require('dotenv').config();
// all keys in .env file available as variables
// process.env.GITHUB_AUTH_KEY available for requests!

const app = express();
// const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/products', (req, res) => {
  api.getAll('products', (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
