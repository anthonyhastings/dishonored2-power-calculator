import 'dotenv/config.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import expressWinston from 'express-winston';
import compression from 'compression';
import logger from './logger.mjs';

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server: PORT environment variable not defined.');
}

const app = express();
const distFolder = path.join(process.cwd(), 'dist');
const serverFolder = path.dirname(fileURLToPath(import.meta.url));

app.use(
  expressWinston.logger({
    expressFormat: true,
    meta: false,
    winstonInstance: logger,
  })
);

app.use(compression());

app.use(express.static(distFolder));

app.get('/characters.json', (request, response) => {
  response.set('Content-Type', 'application/vnd.api+json');
  response.sendFile(path.join(serverFolder, 'characters.json'));
});

app.get('/powers.json', (request, response) => {
  response.set('Content-Type', 'application/vnd.api+json');
  response.sendFile(path.join(serverFolder, 'powers.json'));
});

app.get('/*', (request, response) => {
  response.sendFile(path.join(distFolder, 'index.html'));
});

app.listen(Number(process.env.PORT), '0.0.0.0', () => {
  logger.info(`Listening on port 0.0.0.0:${process.env.PORT}`);
});
