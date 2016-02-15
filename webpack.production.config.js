var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  output: {
    path: `${__dirname}/prod`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders:
      [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
        },
        {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          loader: 'file',
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=100',
        }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.png', '.jpg'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    })
  ]
};