require('dotenv').config();
const { merge: webpackMerge } = require('webpack-merge');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const baseConfig = require('./base');

module.exports = function (env = {}) {
  const productionConfig = webpackMerge(baseConfig('production'), {
    mode: 'production',
    devtool: 'source-map',
    output: {
      chunkFilename: 'js/[name].[contenthash].js',
      filename: 'js/[name].[contenthash].js',
    },
    optimization: {
      minimizer: [
        '...',
        new ImageMinimizerPlugin({
          minimizerOptions: {
            plugins: [
              ['mozjpeg', { quality: 75 }],
              ['optipng', { optimizationLevel: 5 }],
            ],
          },
        }),
        new CssMinimizerPlugin(),
      ],
      runtimeChunk: {
        name: 'manifest',
      },
    },
  });

  if (env.stats === true) {
    productionConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        generateStatsFile: true,
      })
    );
  }

  return productionConfig;
};
