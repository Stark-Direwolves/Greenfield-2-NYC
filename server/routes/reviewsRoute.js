const express = require('express');
const axios = require('axios');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier')
const multer = require('multer');
const fileUpload = multer();

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const router = express.Router();
router.use(express.json());

const getReviews = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews?product_id=${id}&sort=${sort}&count=35`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

const getReviewsMeta = (id) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/meta?product_id=${id}&count=25`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return axios.get(options.url, options);
};

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

router.get('/', (req, res) => {
  getReviews(req.query.product_id, req.query.sort)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

router.get('/meta', (req, res) => {
  getReviewsMeta(req.query.product_id)
    .then((results) => res.status(200).send(results.data))
    .catch((err) => res.status(404).send(err));
});

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

router.post('/photos/upload', fileUpload.single('photos'), (req, res, next) => {
  let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
  };

  async function upload(req) {
    let result = await streamUpload(req);
    console.log(result);
  }

  upload(req);
});

module.exports = router;
