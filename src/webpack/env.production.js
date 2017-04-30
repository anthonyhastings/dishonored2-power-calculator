const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const StatsPlugin = require('stats-webpack-plugin');
const commonConfig = require('./base.js');
const dependencies = require('../package').dependencies;
const vendorDependencies = Object.keys(dependencies).filter((dependency) => {
  return dependency !== 'express' && dependency !== 'babel-runtime';
});

module.exports = function () {
  return webpackMerge(commonConfig(), {
    entry: {
      app: './scripts/index.js',
      vendor: vendorDependencies
    },
    profile: true,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          'drop_console': false,
          'drop_debugger': false,
          'warnings': false
        }
      }),
      new StatsPlugin('js/bundle-stats.json', {
        chunkModules: true,
        exclude: [/node_modules/]
      })
    ]
  });
};
