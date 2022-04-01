const axios = require('axios');
require('dotenv').config();

const getAll = (endpoint, callback) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${endpoint}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  axios.get(options.url, options)
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = {
  getAll,
};
