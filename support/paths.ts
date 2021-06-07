import path from 'path';

const projectRoot = path.join(__dirname, '../');

const paths = {
  dist: path.join(projectRoot, 'dist'),
  images: path.join(projectRoot, 'src/images'),
  manifests: path.join(projectRoot, 'manifests'),
  projectRoot,
  server: path.join(projectRoot, 'server'),
};

export default paths;
