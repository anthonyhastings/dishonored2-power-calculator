const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = {
  root: path.join(__dirname, '../'),
  dist: path.join(__dirname, '../dist')
};

module.exports = function () {
  return {
    output: {
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].js',
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
          test: /\.(png|jpg|gif)$/,
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
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
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
