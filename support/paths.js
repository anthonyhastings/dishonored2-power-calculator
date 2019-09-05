const path = require('path');

const projectRoot = path.join(__dirname, '../');

module.exports = {
  components: path.join(projectRoot, 'src/components'),
  dist: path.join(projectRoot, 'dist'),
  images: path.join(projectRoot, 'images'),
  reducers: path.join(projectRoot, 'src/reducers'),
  server: path.join(projectRoot, 'server')
};
