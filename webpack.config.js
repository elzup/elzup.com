const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports =[{
  entry: './index.js',
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
  postcss: [autoprefixer, precss]
}];
