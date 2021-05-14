const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('../support/paths');

module.exports = function (environment) {
  const isDev = environment === 'development';

  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      path: paths.dist,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images/',
                name: '[name].[contenthash].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: false,
        inject: false,
        meta: [
          {
            name: 'google-site-verification',
            content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN,
          },
        ],
        minify: false,
        template: 'html/index.html',
      }),
      new MiniCssExtractPlugin({
        chunkFilename: isDev ? '[name].css' : 'css/[name].[contenthash].css',
        filename: isDev ? '[id].css' : 'css/[name].[contenthash].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.manifests,
            to: './',
          },
          {
            from: `${paths.images}/manifest`,
            to: 'images/manifest/',
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        Api: paths.api,
        Components: paths.components,
        Constants: paths.constants,
        Images: paths.images,
        Slices: paths.slices,
        Src: paths.src,
      },
    },
  };
};
