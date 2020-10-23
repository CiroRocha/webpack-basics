const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          }},
          { loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [ autoprefixer() ],
                ],
              },
          }},
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'url-loader?limit=8000&name=images/[name].[ext]',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
    })
  ]
}