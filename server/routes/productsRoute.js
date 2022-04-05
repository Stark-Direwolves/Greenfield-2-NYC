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
    .then((results) => results.data.forEach((result) => {
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
          styles: results[i + 1].results,
          ratings: results[i + 2].ratings,
        };
        products.push(obj);
      }
      return products;
    })
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(err));
});

// router.get('/:products_id/related', (req, res) => {
//   getRelatedProducts(req.params.products_id)
//     .then((results) => results.data.map((result) => getProductsById(result)))
//     .then((results) => Promise.all(results))
//     .then((results) => results.map((result) => result.data))
//     .then((results) => res.status(200).send(results))
//     .catch((err) => res.status(404).send(err));
// });

// router.get('/:product_id/related', (req, res) => {
//   getRelatedProducts(req.params.product_id)
//     .then((results) => {
//       const promises = [];
//       results.data.forEach((result) => {
//         const productInfo = [];
//         productInfo.push(getProductsById(result));
//         productInfo.push(getProductStyles(result));
//         productInfo.push(getReviewsMeta(result));
//         promises.push(Promise.all(productInfo));
//       });
//       return Promise.all(promises);
//     })
//     .then((result) => {
//       const products = {};
//       result.forEach((product) => {
//         const productInfo = {};
//         productInfo.products = product[0].data
//         productInfo.styles = product[1].data
//         productInfo.reviews = product[2].data
//         products[product[0].data.id] = productInfo;
//       })
//       res.status(200).send(products);
//     })
//     .catch((err) => res.status(404).send(err));
// });
module.exports = router;
