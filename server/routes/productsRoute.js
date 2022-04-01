const express = require('express');
const axios = require('axios');
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

router.get('/', (req, res) => {
  getProducts()
    .then((results) => (res.status(200).send(results.data)))
    .catch((err) => (res.status(404).send(err)));
});

router.get('/:products_id', (req, res) => {
  getProductsById(req.params.products_id)
    .then((results) => (res.status(200).send(results.data)))
    .catch((err) => (res.status(404).send(err)));
});

router.get('/:products_id/styles', (req, res) => {
  getProductStyles(req.params.products_id)
    .then((results) => (res.status(200).send(results.data)))
    .catch((err) => (res.status(404).send(err)));
});

router.get('/:products_id/related', (req, res) => {
  getRelatedProducts(req.params.products_id)
    .then((results) => (res.status(200).send(results.data)))
    .catch((err) => (res.status(404).send(err)));
});

module.exports = router;
