require('dotenv').config();
const path = require('path');
const { merge: webpackMerge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const paths = require('../support/paths');
const baseConfig = require('./base');

module.exports = function () {
  return webpackMerge(baseConfig('development'), {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].js',
    },
    plugins: [
      new CopyWebpackPlugin(
        [
          {
            from: path.join(paths.server, '/characters.json'),
            to: './',
          },
          {
            from: path.join(paths.server, '/powers.json'),
            to: './',
          },
        ],
        {
          logLevel: 'debug',
        }
      ),
      new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
      compress: true,
      contentBase: paths.dist,
      disableHostCheck: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      inline: true,
      noInfo: false,
      port: Number(process.env.PORT),
      publicPath: '/',
      quiet: false,
    },
  });
};
