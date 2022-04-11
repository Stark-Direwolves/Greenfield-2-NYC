const express = require('express');
const path = require('path');
const products = require('./routes/productsRoute');
const reviews = require('./routes/reviewsRoute');
const questions = require('./routes/qaRoute');
require('dotenv').config();

// all keys in .env file available as variables
// process.env.GITHUB_AUTH_KEY available for requests!

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist'))); // moved static get down to catch all req

app.use('/products', products);

app.use('/reviews', reviews);

app.use('/qa', questions);

app.use('/:product', express.static(path.join(__dirname, '..', 'client', 'dist'))); // moved static get down to catch all req

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
