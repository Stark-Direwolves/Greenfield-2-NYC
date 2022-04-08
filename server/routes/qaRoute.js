const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
router.use(express.json());

const getQA = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=${id}&count=99`,
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

const postAnswer = (body, qaId) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaId}/answers`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.post(options.url, body, options);
};

const putQ = (qaID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaID}/helpful`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
};

const postQA = (body) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.post(options.url, body, options);
};

const putReport = (qaID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaID}/report`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
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

router.put('/:question_id/helpful', (req, res) => {
  putQ(req.params.question_id)
    .then(() => res.status(200).send(`this was marked helpful ${req.params.question_id}`))
    .catch((err) => res.status(404).send(err));
});

router.post('/', (req, res) => {
  postQA(req.body)
    .then(() => res.status(200).send(`question post created for ${req.body.product_id}`))
    .catch((err) => res.status(404).send(err));
});

router.post('/:question_id/answers', (req, res) => {
  postAnswer(req.body, req.params.question_id)
    .then(() => res.status(200).send(`question post created for ${req.params.question_id}`))
    .catch((err) => res.status(404).send(err));
});

// /qa/questions/:question_id/report
router.put('/:question_id/report', (req, res) => {
  putReport(req.params.question_id)
    .then(() => res.status(200).send(`this was marked helpful ${req.params.question_id}`))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
