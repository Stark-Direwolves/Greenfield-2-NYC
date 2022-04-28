const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const getProducts = () => {
  const options = {
    url: `${process.env.API_URL}/products`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getProductsById = (id) => {
  const options = {
    url: `${process.env.API_URL}/products/${id}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getProductStyles = (id) => {
  const options = {
    url: `${process.env.API_URL}/products/${id}/styles`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getRelatedProducts = (id) => {
  const options = {
    url: `${process.env.API_URL}/products/${id}/related`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getReviewsMeta = (id) => {
  const options = {
    url: `${process.env.API_URL}/reviews/meta?product_id=${id}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const filterDefaultStyle = (styles) => {
  const defaultStyle = [];
  for (let i = 0; i < styles.length; i += 1) {
    if (styles[i]['default?'] === true) {
      defaultStyle.push(styles[i]);
      break;
    }
  }
  defaultStyle.push(styles[0]);
  return defaultStyle.slice(0, 1);
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

router.get('/:product_id/related', (req, res) => {
  const promises = [];
  getRelatedProducts(req.params.product_id)
    .then((results) => [...new Set(results.data)])
    .then((results) => results.forEach((result) => {
      promises.push(getProductsById(result));
      promises.push(getProductStyles(result));
      promises.push(getReviewsMeta(result));
    }))
    .then(() => Promise.all(promises))
    .then((results) => results.map((result) => result.data))
    .then((results) => {
      const products = [];
      for (let i = 0; i < results.length; i += 3) {
        const obj = {
          id: results[i].id,
          category: results[i].category,
          name: results[i].name,
          default_price: results[i].default_price,
          features: results[i].features,
          styles: filterDefaultStyle(results[i + 1].results),
          ratings: results[i + 2].ratings,
        };
        products.push(obj);
      }
      return products;
    })
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
