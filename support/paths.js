const path = require('path');

const projectRoot = path.join(__dirname, '../');

module.exports = {
  api: path.join(projectRoot, 'src/api'),
  components: path.join(projectRoot, 'src/components'),
  constants: path.join(projectRoot, 'src/constants'),
  dist: path.join(projectRoot, 'dist'),
  images: path.join(projectRoot, 'images'),
  manifests: path.join(projectRoot, 'manifests'),
  slices: path.join(projectRoot, 'src/slices'),
  server: path.join(projectRoot, 'server'),
  src: path.join(projectRoot, 'src'),
};
