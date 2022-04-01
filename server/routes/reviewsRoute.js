const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const getReviews = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews?product_id=${id}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getReviewsMeta = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/meta?product_id=${id}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

router.get('/', (req, res) => {
  getReviews(req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

router.get('/meta', (req, res) => {
  getReviewsMeta(req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
