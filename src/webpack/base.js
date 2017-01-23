const path = require('path');
const webpack = require('webpack');

module.exports = function() {
  return {
    entry: {
      bundle: './scripts/index.js',
      vendor: ['underscore', 'immutable', 'redux', 'reselect']
    },
    output: {
      path: './dist/',
      filename: 'js/[name].js'
    },
    module: {
      // TODO: What libraries being used can be put under `noParse`???

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
      contentBase: path.join(__dirname, 'dist'),
      publicPath: '/',
      historyApiFallback: true,
      compress: true,
      inline: true,
      noInfo: false,
      quiet: false
    }
  };
};
