const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('../support/paths');
const path = require('path');

module.exports = function (environment) {
  const isDev = environment === 'development';
  const browserslistConfig = path.join(paths.projectRoot, '/.browserslistrc');

  return {
    entry: {
      main: ['./src/index.js'],
    },
    infrastructureLogging: {
      level: 'log',
    },
    target: `browserslist:${browserslistConfig}`,
    output: {
      clean: true,
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
          test: /\.(svg|png|jpg|jpeg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash][ext][query]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        meta: {
          'google-site-verification':
            process.env.GOOGLE_SITE_VERIFICATION_TOKEN,
        },
        minify: true,
        scriptLoading: 'blocking',
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
      modules: ['node_modules', 'src'],
    },
  };
};
