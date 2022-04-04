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

router.get('/:product_id/related', (req, res) => {
  getRelatedProducts(req.params.product_id)
    .then((results) => {
      const promises = [];
      results.data.forEach((result) => {
        const productInfo = [];
        productInfo.push(getProductsById(result));
        productInfo.push(getProductStyles(result));
        productInfo.push(getReviewsMeta(result));
        promises.push(Promise.all(productInfo));
      });
      return Promise.all(promises);
    })
    .then((result) => {
      const products = {};
      result.forEach((product) => {
        const productInfo = {};
        productInfo.products = product[0].data
        productInfo.styles = product[1].data
        productInfo.reviews = product[2].datanp
        products[product[0].data.id] = productInfo;
      })
      res.status(200).send(products);
    })
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
