const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = [{
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: []
}, {
  entry: {
    style: './src/styles/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", ["css", "postcss", "sass"])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  postcss: [
    autoprefixer,
    precss
  ]
}];
