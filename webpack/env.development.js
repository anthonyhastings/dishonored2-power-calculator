const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');
const baseConfig = require('./base');

module.exports = function() {
  return webpackMerge(baseConfig(), {
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${Number(process.env.PORT)}`,
      'webpack/hot/only-dev-server',
      './src/index.js'
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
      new webpack.HotModuleReplacementPlugin(),
      new CopyWebpackPlugin([
        {
          from: paths.server,
          test: /\.json$/,
          to: './'
        }
      ])
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
      quiet: false
    }
  });
};
