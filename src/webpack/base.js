const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  root: path.join(__dirname, '../../'),
  dist: path.join(__dirname, '../../dist'),
  images: path.join(__dirname, '../images/'),
  powerImages: path.join(__dirname, '../images/powers')
};

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
        /node_modules\/reselect/,
        /node_modules\/underscore/
      ],
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            {
              loader: 'style-loader'
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
      quiet: false
    }
  };
};
