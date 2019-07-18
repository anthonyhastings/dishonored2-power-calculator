const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');

module.exports = function () {
  return {
    mode: 'none',
    entry: null,
    output: {
      path: paths.dist,
      publicPath: '/'
    },
    module: {
      noParse: [
        /node_modules\/immutable/,
        /node_modules\/underscore/
      ],
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images/',
                name: '[name].[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.webmanifest$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'manifests/',
                name: '[name].[hash].[ext]'
              }
            },
            {
              loader: 'webmanifest-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([paths.dist], {
        root: paths.root,
        verbose: true,
        dry: false
      }),
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: false,
        inject: false,
        meta: [
          {
            name: 'google-site-verification',
            content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN
          }
        ],
        minify: false,
        template: 'html/index.html'
      })
    ],
    resolve: {
      alias: {
        imagesRoot: paths.images,
        powerImages: paths.powerImages
      }
    }
  };
};