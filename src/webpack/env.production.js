const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          'drop_console': false,
          'drop_debugger': false,
          'warnings': false
        }
      })
    ]
  });
};
