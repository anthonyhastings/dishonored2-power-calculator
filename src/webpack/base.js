const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  root: path.join(__dirname, '../'),
  dist: path.join(__dirname, '../dist'),
  images: path.join(__dirname, '../images/'),
  powerImages: path.join(__dirname, '../images/powers')
};

module.exports = function () {
  return {
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
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'}
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'postcss-loader'},
            {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images/'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                pngquant: {
                  quality: '75-90',
                  speed: 4,
                  verbose: true
                },
                svgo: {
                  plugins: [
                    {removeDimensions: true}
                  ]
                }
              }
            }
          ]
        },
        {
          test: /web-manifest\.json$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'manifests/'
              }
            },
            {loader: 'webmanifest-loader'}
          ]
        }
      ]
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'html/index.html',
        inject: false,
        hash: false,
        minify: false
      }),
      new CleanWebpackPlugin([paths.dist], {
        root: paths.root,
        verbose: true,
        dry: false
      })
    ],
    resolve: {
      alias: {
        imagesRoot: paths.images,
        powerImages: paths.powerImages
      },
      extensions: ['*', '.js', '.jsx', '.json']
    },
    devServer: {
      hot: true,
      host: '0.0.0.0',
      port: Number(process.env.PORT),
      contentBase: paths.dist,
      disableHostCheck: true,
      publicPath: '/',
      historyApiFallback: true,
      compress: true,
      inline: true,
      noInfo: false,
      quiet: false
    }
  };
};
