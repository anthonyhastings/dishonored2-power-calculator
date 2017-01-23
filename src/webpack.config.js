const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  entry: {
    bundle: './scripts/index.js',
    vendor: ['redux']
  },
  output: {
    path: './dist/',
    filename: 'js/[name].js'
  },
  module: {
    // TODO: What libraries being used can be put under `noParse`???

  },





  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    inline: true,
    noInfo: false,
    quiet: false
  }
};

// IF PRODUCTION.
// new webpack.DefinePlugin({
//   'process.env.NODE_ENV': JSON.stringify('production')
// })

// IF PRODUCTION.
// new webpack.optimize.UglifyJsPlugin({
//     compress: {
//         'drop_console': false,
//         'drop_debugger': false,
//         'warnings': false
//     }
// })


module.exports = webpackConfig
