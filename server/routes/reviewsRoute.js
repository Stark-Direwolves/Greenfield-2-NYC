const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const getReviews = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews?product_id=${id}&sort=relevant&count=9`,
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

// move below vvv routes to avoid merge conflict if any changes were made

const addReview = (body) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.post(options.url, body, options);
};

// note to self: in postman post req, characteristics labeled by id given in meta get req

const markReviewHelpful = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${id}/helpful`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
};

const reportReview = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${id}/report`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
};

router.post('/', (req, res) => {
  addReview(req.body)
    .then((results) => res.status(201).send(results.data))
    .catch((err) => res.status(400).send(err));
});

router.put('/:review_id/helpful', (req, res) => {
  markReviewHelpful(req.params.review_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(400).send(err));
});

router.put('/:review_id/report', (req, res) => {
  reportReview(req.params.review_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
