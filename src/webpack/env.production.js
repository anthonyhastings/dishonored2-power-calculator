const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin =  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const commonConfig = require('./base');
const dependencies = require('../package').dependencies;

const vendorBlacklist = ['babel-runtime', 'cors', 'express'];
const vendorDependencies = Object.keys(dependencies).filter((dependency) => {
  return vendorBlacklist.includes(dependency) === false;
});

module.exports = function (env) {
  const productionConfig = webpackMerge(commonConfig(), {
    entry: {
      app: './scripts/index.js',
      vendor: vendorDependencies
    },
    output: {
      chunkFilename: 'js/[name].[chunkhash].js',
      filename: 'js/[name].[chunkhash].js'
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
      new ImageminPlugin({
        pngquant: {
          quality: '75-90',
          speed: 4,
          verbose: true
        },
        svgo: {
          plugins: [
            {removeDimensions: true}
          ]
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
