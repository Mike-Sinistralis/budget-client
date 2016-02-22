var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8010',
    'webpack/hot/dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders:
      [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel',
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
        },
        {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.(png|jpg)$/,
          loader: 'file',
        },
        {
          test: /\.json?$/,
          exclude: /node_modules/,
          loader: "json"
        }
      ]
  },
  devtool: 'inline-source-map',
  cache: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.png', '.jpg']
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    })
  ]
};