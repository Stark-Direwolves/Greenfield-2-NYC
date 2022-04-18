const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const products = require('./routes/productsRoute');
const reviews = require('./routes/reviewsRoute');
const questions = require('./routes/qaRoute');
require('dotenv').config();

// all keys in .env file available as variables
// process.env.GITHUB_AUTH_KEY available for requests!

const app = express();

const addToCart = (body) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/cart`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.post(options.url, body, options);
};

app.use('/', expressStaticGzip(path.join(__dirname, '..', 'client', 'dist'), {
  enableBrotli: true,
  orderPreference: ['br'],
}));

// app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
// moved static get down to catch all req

app.use('/products', products);

app.use('/reviews', reviews);

app.use('/qa', questions);

app.use('/:product', expressStaticGzip(path.join(__dirname, '..', 'client', 'dist'), {
  enableBrotli: true,
  orderPreference: ['br'],
}));

app.post('/cart/add', (req, res) => {
  addToCart(req.body)
    .then(() => res.status(200).send(`answer post created for ${req.params.question_id}`))
    .catch((err) => res.status(404).send(err));
});

// app.use('/:product', express.static(path.join(__dirname, '..', 'client', 'dist'))); // moved static get down to catch all req

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
