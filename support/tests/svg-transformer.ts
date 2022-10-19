const path = require('node:path');

module.exports = {
  process: (src, filename) => ({
    code: `module.exports = { default: '${JSON.stringify(
      path.basename(filename)
    )}', ReactComponent: 'div' };`,
  }),
};
