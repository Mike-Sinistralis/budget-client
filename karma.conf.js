const path = require('path');

module.exports = function exports(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test/testHelper.js',
    ],
    plugins: ['karma-phantomjs-launcher', 'karma-mocha',
      'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
      'karma-mocha-reporter',
    ],
    preprocessors: {
      'test/testHelper.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            loader: 'isparta',
            include: [
              path.join(__dirname, 'src/actions'),
              path.join(__dirname, 'src/components'),
              path.join(__dirname, 'src/reducers'),
              path.join(__dirname, 'src/sagas'),
              path.join(__dirname, 'src/utils'),
            ],
          },
        ],
        loaders: [
          [
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',
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
              loader: 'url-loader?limit=8192',
            },
          ],
        ],
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.png', '.jpg'],
      },
      cache: true,
      devtool: 'inline-source-map',
    },
    webpackServer: {
      noInfo: true,
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
  });
};
