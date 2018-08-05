const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin =  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base');
const dependencies = require('../package').dependencies;

const vendorBlacklist = ['babel-runtime', 'cors', 'express', 'normalize.css'];
const vendorDependencies = Object.keys(dependencies).filter((dependency) => {
  return vendorBlacklist.includes(dependency) === false;
});

module.exports = function (env) {
  const productionConfig = webpackMerge(baseConfig(), {
    mode: 'production',
    entry: {
      app: './scripts/index.js',
      vendor: vendorDependencies
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        })
      ],
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
      },
      runtimeChunk: {
        name: 'manifest'
      }
    },
    output: {
      chunkFilename: 'js/[name].[chunkhash].js',
      filename: 'js/[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
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
      }),
      new MiniCssExtractPlugin({
        chunkFilename: 'css/[name].[chunkhash].css',
        filename: 'css/[name].[chunkhash].css'
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
