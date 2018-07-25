const path = require('path');
const express = require('express');
const app = express();

const indexFilePath = path.resolve('dist/index.html');

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server.js: PORT environment variable not defined.');
}

app.use(function (request, response, next) {
  console.log(`Express - Request: ${request.url}`);
  next();
});

app.use(express.static('dist'));

app.get('*', function (request, response) {
  response.sendFile(indexFilePath);
});

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.info(`Listening on port 0.0.0.0:${process.env.PORT}`);
});
