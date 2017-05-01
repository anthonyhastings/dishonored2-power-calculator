const express = require('express');
const app = express();

if (typeof process.env.PORT === 'undefined') {
  throw new Error('Server.js: PORT environment variable not defined.');
}

app.use(express.static('dist'));
app.listen(process.env.PORT);
console.info(`Listening on port ${process.env.PORT}`);
