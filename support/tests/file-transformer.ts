const path = require('node:path');

module.exports = {
  process: (src, filename) => ({
    code: 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';',
  }),
};
