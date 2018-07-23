const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base');

module.exports = function () {
  return webpackMerge(commonConfig(), {
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${Number(process.env.PORT)}`,
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './scripts/index.js'
    ],
    output: {
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
};
