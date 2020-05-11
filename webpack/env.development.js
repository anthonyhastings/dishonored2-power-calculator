const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('../support/paths');
const baseConfig = require('./base');

module.exports = function () {
  return webpackMerge(baseConfig('development'), {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].js',
    },
    plugins: [
      new CopyWebpackPlugin(
        [
          {
            from: paths.server,
            test: /\.json$/,
            to: './',
          },
        ],
        {
          logLevel: 'debug',
        }
      ),
    ],
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    devServer: {
      compress: true,
      contentBase: paths.dist,
      disableHostCheck: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      inline: true,
      noInfo: false,
      port: Number(process.env.PORT),
      publicPath: '/',
      quiet: false,
    },
  });
};
