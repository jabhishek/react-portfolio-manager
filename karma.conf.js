const webpack = require('webpack');

module.exports = function (config) {
  config.set({

        // base path, that will be used to resolve files and exclude
    basePath: '',

        // frameworks to use
    frameworks: ['mocha'],

        // list of files / patterns to load in the browser
    files: [
      'src/**/*spec.js'
    ],

        // list of preprocessors
    preprocessors: {
      'src/**/*spec.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.scss', '.json']
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.less$/,
            loader: 'style!css?modules&camelCase&localIdentName=[local]!less'
          },
          {
            test: /\.json$/, loader: 'json'
          }
        ],
        plugins: [
          new webpack.DefinePlugin({
            'process.env.BABEL_ENV': JSON.stringify('test')
          })
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      node: {
        fs: 'empty'
      }
    },

    webpackMiddleware: {
      quiet: true,
      noInfo: true,
      stats: {
        colors: true
      }
    },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['spec'],

        // web server port
    port: 9876,

        // enable / disable colors in the output (reporters and logs)
    colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
    singleRun: false,

    crossOriginAttribute: false,
        // List plugins explicitly, since autoloading karma-webpack
        // won't work here
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-spec-reporter',
      'karma-chrome-launcher'
    ]
  });
};
