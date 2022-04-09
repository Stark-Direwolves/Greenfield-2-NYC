const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
router.use(express.json());

// get all 99 questions GET /qa/questions
const getQA = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=${id}&count=9999`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

// get all 99 answers GET /qa/questions/:question_id/answers
const getAnswers = (qaId, productId) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaId}/answers?product_id=${productId}&count=9999`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

// POST /qa/questions/:question_id/answers
const postAnswer = (body, qaId) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaId}/answers`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.post(options.url, body, options);
};

// PUT /qa/questions/:question_id/helpful
const putQ = (qaID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaID}/helpful`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
};

// POST /qa/questions
const postQA = (body) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.post(options.url, body, options);
};

// PUT /qa/questions/:question_id/report
const putReport = (qaID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${qaID}/report`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
};

// PUT /qa/answers/:answer_id/helpful
const putHepfulA = (aID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/answers/${aID}/helpful`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
};

// PUT /qa/answers/:answer_id/report
const putReportA = (aID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/answers/${aID}/report`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.put(options.url, {}, options);
};

// route to get all 99 questions
router.get('/questions/', (req, res) => {
  getQA(req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

// route to get all 99 answers
router.get('/questions/:question_id/answers', (req, res) => {
  getAnswers(req.params.question_id, req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

// route to update questions helpfulness
router.put('/questions/:question_id/helpful', (req, res) => {
  putQ(req.params.question_id)
    .then(() => res.status(200).send(`this question was marked helpful ${req.params.question_id}`))
    .catch((err) => res.status(404).send(err));
});

// route to post a question
router.post('/questions/', (req, res) => {
  postQA(req.body)
    .then(() => res.status(200).send(`question post created for ${req.body.product_id}`))
    .catch((err) => res.status(404).send(err));
});

// route to post an answer
router.post('/questions/:question_id/answers', (req, res) => {
  postAnswer(req.body, req.params.question_id)
    .then(() => res.status(200).send(`answer post created for ${req.params.question_id}`))
    .catch((err) => res.status(404).send(err));
});

// /qa/questions/:question_id/report, route to report questions
router.put('/questions/:question_id/report', (req, res) => {
  putReport(req.params.question_id)
    .then(() => res.status(200).send(`this was question was reported ${req.params.question_id}`))
    .catch((err) => res.status(404).send(err));
});

// PUT /qa/answers/:answer_id/report route to report answers
router.put('/answers/:answers/report', (req, res) => {
  putReportA(req.params.answers)
    .then(() => res.status(200).send(`this was answer was reported ${req.params.answers}`))
    .catch((err) => res.status(404).send(err));
});

// PUT /qa/answers/:answer_id/helpful route to mark helpful answers
router.put('/answers/:answers/helpful', (req, res) => {
  putHepfulA(req.params.answers)
    .then(() => res.status(200).send(`this was answer was helpful ${req.params.answers}`))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
