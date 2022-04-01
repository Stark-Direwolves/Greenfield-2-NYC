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

router.get('/', (req, res) => {
  getQA(req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
