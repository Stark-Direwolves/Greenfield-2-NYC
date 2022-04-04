const express = require('express');
const axios = require('axios');
const reviews = require('./reviewsRoute');
require('dotenv').config();

const router = express.Router();

const getProducts = () => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products',
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getProductsById = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getProductStyles = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getRelatedProducts = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/related`,
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
  getProducts()
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

router.get('/:product_id', (req, res) => {
  getProductsById(req.params.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

router.get('/:product_id/styles', (req, res) => {
  getProductStyles(req.params.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

// router.get('/:product_id/related', (req, res) => {
//   const promises = [];
//   const ids = [];
//   const styles = [];
//   const ratings = [];
//   getRelatedProducts(req.params.product_id)
//     .then((results) => results.data.forEach((result) => {
//       ids.push(getProductsById(result));
//       styles.push(getProductStyles(result));
//       ratings.push(getReviewsMeta(result));
//     }))
//     .then(() => promises.push(ids, styles, ratings))
//     .then((results) => console.log(results))
//     .then(() => promises.forEach((promise) => Promise.all(promise)))
//     .then((results) => results.map((result) => result.data))
//     .then((results) => res.status(200).send(results))
//     .catch((err) => res.status(404).send(err));
// });

router.get('/:products_id/related', (req, res) => {
  getRelatedProducts(req.params.products_id)
    .then((results) => results.data.map((result) => getProductsById(result)))
    .then((results) => Promise.all(results))
    .then((results) => results.map((result) => result.data))
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(err));
});
module.exports = router;
