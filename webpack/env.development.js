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
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(paths.server, '/characters.json'),
            to: './',
          },
          {
            from: path.join(paths.server, '/powers.json'),
            to: './',
          },
        ],
      }),
      new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
      devMiddleware: {
        publicPath: '/',
      },
      compress: true,
      host: '0.0.0.0',
      static: paths.dist,
      firewall: false,
      historyApiFallback: true,
      port: Number(process.env.PORT),
    },
  });
};
