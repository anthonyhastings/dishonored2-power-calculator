const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = function () {
  return webpackMerge(commonConfig(), {});
};
