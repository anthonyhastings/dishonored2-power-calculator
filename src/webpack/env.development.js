const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base');

module.exports = function () {
  return webpackMerge(baseConfig(), {
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
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
};
