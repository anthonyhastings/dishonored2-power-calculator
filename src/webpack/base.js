const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, '../dist');

module.exports = function () {
  return {
    entry: {
      app: './scripts/index.js',
      vendor: ['immutable', 'react', 'react-dom', 'react-redux', 'redux', 'reselect', 'underscore']
    },
    output: {
      path: distPath,
      filename: 'js/[name].js'
    },
    module: {
      noParse: /immutable|reselect|underscore/,
      rules: [
        {
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'html/index.html',
        inject: false,
        hash: false,
        minify: false
      })
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    devServer: {
      host: '0.0.0.0',
      port: Number(process.env.PORT),
      contentBase: distPath,
      publicPath: '/',
      historyApiFallback: true,
      compress: true,
      inline: true,
      noInfo: false,
      quiet: false
    }
  };
};
