import path from 'path';
import express from 'express';
import compression from 'compression';
import characters from './characters.json';
import powers from './powers.json';

const app = express();

const indexFilePath = path.resolve('./dist/index.html');

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server.js: PORT environment variable not defined.');
}

app.use((request, response, next) => {
  console.log(`Express - Request: ${request.url}`);
  next();
});

app.use(compression());

app.use(express.static('./dist'));

app.get('/characters.json', (request, response) => {
  response.set('Content-Type', 'application/vnd.api+json');
  response.send(characters);
});

app.get('/powers.json', (request, response) => {
  response.set('Content-Type', 'application/vnd.api+json');
  response.send(powers);
});

app.get('/*', (request, response) => {
  response.sendFile(indexFilePath);
});

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.info(`Listening on port 0.0.0.0:${process.env.PORT}`);
});
