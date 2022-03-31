const express = require('express');
const path = require('path');
require('dotenv').config();
// all keys in .env file available as variables
// process.env.GITHUB_AUTH_KEY available for requests!

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
