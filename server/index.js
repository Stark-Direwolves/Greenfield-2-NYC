const express = require('express');
const path = require('path');
const products = require('./routes/productsRoute');
require('dotenv').config();

// all keys in .env file available as variables
// process.env.GITHUB_AUTH_KEY available for requests!

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use('/products', products);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
