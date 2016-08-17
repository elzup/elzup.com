module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist/',
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
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: []
}
