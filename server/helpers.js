const axios = require('axios');
require('dotenv').config();

const get = (category) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${category}`,
    headers: {
      Authorization: process.env.GITHUB_AUTH_KEY,
    },
  };
  return new Promise((resolve, reject) => {
    axios.get(options.url, options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  get,
};
