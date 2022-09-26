import 'dotenv/config';
import path from 'node:path';
import express from 'express';
import expressWinston from 'express-winston';
import compression from 'compression';
import { logger } from './logger.mjs';

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server: PORT environment variable not defined.');
}

const app = express();
const distFolder = path.join(process.cwd(), 'dist');

app.use(
  expressWinston.logger({
    expressFormat: true,
    meta: false,
    winstonInstance: logger,
  })
);

app.use(compression());

app.use(express.static(distFolder));

app.get('/*', (request, response) => {
  response.sendFile(path.join(distFolder, 'index.html'));
});

app.listen(Number(process.env.PORT), '0.0.0.0', () => {
  logger.info(`Listening on port 0.0.0.0:${process.env.PORT}`);
});
