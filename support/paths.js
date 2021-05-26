const path = require('path');

const projectRoot = path.join(__dirname, '../');

module.exports = {
  dist: path.join(projectRoot, 'dist'),
  images: path.join(projectRoot, 'src/images'),
  manifests: path.join(projectRoot, 'manifests'),
  projectRoot,
  server: path.join(projectRoot, 'server'),
};
