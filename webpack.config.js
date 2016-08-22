const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcss_import = require('postcss-import');

module.exports =[{
  entry: {
    "index": './src/index.js',
    "product": './src/product.js',
    "art": './src/art.js',
    "log": './src/log.js',
  },
  output: {
    path: path.join(__dirname, 'public', 'dist', 'scripts'),
    filename: '[name].bundle.js'
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
      },
      {
        test: /\.css$/,
        loader: "style!css?modules!postcss"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  devServer: {
    contentBase: './public'
  },
  postcss: [
    autoprefixer,
    precss,
    postcss_import({
      addDependencyTo: webpack
    })
  ]
}];
