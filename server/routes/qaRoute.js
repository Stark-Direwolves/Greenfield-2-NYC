const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const getQA = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=${id}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getAnswers = (qaId, productId) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaId}/answers?product_id=${productId}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

router.get('/', (req, res) => {
  getQA(req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

router.get('/:question_id/answers', (req, res) => {
  getAnswers(req.params.question_id, req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;