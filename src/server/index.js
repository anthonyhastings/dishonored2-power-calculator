const path = require('path');
const express = require('express');
const app = express();

const indexFilePath = path.resolve('dist/index.html');

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server.js: PORT environment variable not defined.');
}

app.use(express.static('dist'));

app.get('*', function (request, response) {
  response.sendFile(indexFilePath);
});

app.listen(process.env.PORT);
console.info(`Listening on port ${process.env.PORT}`);
