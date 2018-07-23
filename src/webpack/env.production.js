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
    mode: 'production',
    entry: {
      app: './scripts/index.js',
      vendor: vendorDependencies
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendor: {
            chunks: 'all',
            enforce: true,
            name: 'vendor',
            test: 'vendor'
          }
        }
      }
    },
    output: {
      chunkFilename: 'js/[name].[chunkhash].js',
      filename: 'js/[name].[chunkhash].js'
    },
    plugins: [
      new ImageminPlugin({
        pngquant: {
          quality: '75-90',
          speed: 4,
          verbose: true
        },
        svgo: {
          plugins: [
            {
              removeDimensions: true
            }
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
