var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,

      exclude: [node_modules_dir],
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;