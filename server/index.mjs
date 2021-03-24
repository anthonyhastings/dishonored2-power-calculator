import 'dotenv/config.js';
import path from 'path';
import express from 'express';
import expressWinston from 'express-winston';
import compression from 'compression';
import logger from './logger.mjs';
import paths from '../support/paths.js';
import characters from './characters.json';
import powers from './powers.json';

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server: PORT environment variable not defined.');
}

const app = express();

app.use(
  expressWinston.logger({
    expressFormat: true,
    meta: false,
    winstonInstance: logger,
  })
);

app.use(compression());

app.use(express.static(paths.dist));

app.get('/characters.json', (request, response) => {
  response.set('Content-Type', 'application/vnd.api+json');
  response.send(characters);
});

app.get('/powers.json', (request, response) => {
  response.set('Content-Type', 'application/vnd.api+json');
  response.send(powers);
});

app.get('/*', (request, response) => {
  response.sendFile(path.join(paths.dist, 'index.html'));
});

app.listen(process.env.PORT, '0.0.0.0', function () {
  logger.info(`Listening on port 0.0.0.0:${this.address().port}`);
});
