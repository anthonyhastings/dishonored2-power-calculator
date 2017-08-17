const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin =  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = require('./base');
const dependencies = require('../package').dependencies;
const vendorDependencies = Object.keys(dependencies).filter((dependency) => {
  return dependency !== 'express' && dependency !== 'babel-runtime';
});

module.exports = function (env) {
  const productionConfig = webpackMerge(commonConfig(), {
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
      })
    ]
  });

  if (env.stats === 'true') {
    productionConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        generateStatsFile: true
      })
    );
  }

  return productionConfig;
};
