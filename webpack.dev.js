const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
})