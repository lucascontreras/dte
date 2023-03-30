const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    // needed this publicPath: 'dist';. publicPath and path are two different things!
    //publicPath: 'dist',
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    clean: true, // delete old builds, allows fresh build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}