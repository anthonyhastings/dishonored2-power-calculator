const path = require('path');
const webpack = require('webpack');
const distPath = path.join(__dirname, '../dist');

module.exports = function() {
  return {
    entry: {
      bundle: './scripts/index.js',
      vendor: ['underscore', 'immutable', 'redux', 'reselect']
    },
    output: {
      path: distPath,
      filename: 'js/[name].js'
    },
    module: {
      //noParse: /underscore|immutable|redux|reselect/
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
      })
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    devServer: {
      port: 8080,
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
