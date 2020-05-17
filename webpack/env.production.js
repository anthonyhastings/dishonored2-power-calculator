const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
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
        new ImageminPlugin({
          pngquant: {
            quality: '75-90',
            speed: 4,
            verbose: true,
          },
          svgo: {
            plugins: [
              {
                removeDimensions: true,
              },
            ],
          },
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              annotation: true,
              inline: false,
            },
          },
        }),
        new TerserPlugin({
          sourceMap: true,
        }),
      ],
      splitChunks: {
        cacheGroups: {
          default: false,
          vendor: {
            chunks: 'all',
            enforce: true,
            name: 'vendor',
            test: /[\\/]node_modules[\\/](?!normalize)/,
          },
        },
      },
      moduleIds: 'hashed',
      runtimeChunk: {
        name: 'manifest',
      },
    },
  });

  if (env.stats === 'true') {
    productionConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        generateStatsFile: true,
      })
    );
  }

  return productionConfig;
};
