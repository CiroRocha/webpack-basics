const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
})

// module.exports = {
//   mode: 'production',
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '',
//   },
//   devtool: 'none',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: 'babel-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader', options: {
//             importLoaders: 1,
//             modules: {
//               localIdentName: '[name]__[local]__[hash:base64:5]',
//             }
//           }},
//           { loader: 'postcss-loader',
//             options: {
//               postcssOptions: {
//                 plugins: [
//                   [ autoprefixer() ],
//                 ],
//               },
//           }},
//         ]
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/,
//         use: 'url-loader?limit=8000&name=images/[name].[ext]',
//       },
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: __dirname + '/src/index.html',
//       filename: 'index.html',
//       inject: 'body',
//     })
//   ]
// }