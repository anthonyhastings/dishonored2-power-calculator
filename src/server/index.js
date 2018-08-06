const path = require('path');
const express = require('express');
const app = express();
const characters = require('./characters');
const powers = require('./powers');

const indexFilePath = path.resolve('../dist/index.html');

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server.js: PORT environment variable not defined.');
}

app.use(function (request, response, next) {
  console.log(`Express - Request: ${request.url}`);
  next();
});

app.use(express.static('../dist'));

app.get('/characters.json', function (request, response) {
  response.set('Content-Type', 'application/vnd.api+json');
  response.send(characters);
});

app.get('/powers.json', function (request, response) {
  response.set('Content-Type', 'application/vnd.api+json');
  response.send(powers);
});

app.get('/*', function (request, response) {
  response.sendFile(indexFilePath);
});

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.info(`Listening on port 0.0.0.0:${process.env.PORT}`);
});
