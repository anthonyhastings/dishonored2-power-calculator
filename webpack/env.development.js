const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const baseConfig = require('./base');

module.exports = function() {
  return webpackMerge(baseConfig(), {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: true
              }
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
      new CopyWebpackPlugin(
        [
          {
            from: paths.server,
            test: /\.json$/,
            to: './'
          }
        ],
        {
          logLevel: 'debug'
        }
      ),
      new MiniCssExtractPlugin({
        chunkFilename: '[name].css',
        filename: '[id].css'
      })
    ],
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
      quiet: false
    }
  });
};
