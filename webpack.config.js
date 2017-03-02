var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'] 
      },
      {
        loaders:["style-loader", "css-loader", "sass-loader"],
        test:/\.scss$/
      }
    ]
  }
};