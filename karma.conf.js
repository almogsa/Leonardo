
module.exports = function(config) {
  config.set({
    mime: { 'text/x-typescript': ['ts','tsx'] },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files to exclude
    exclude: [
    ],

    files: [
      'http://outbrain.github.io/Leonardo/dist/leonardo.js',
      'src/leonardo/**/*.spec.ts'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/leonardo/**/*.spec.ts': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    webpack: {
      mode: "development",
      resolve: {
        extensions: ['.js', '.ts', '.less']
      },
      module: {
        rules: [
          {
            test: /\.ts?$/,
            use: ['ts-loader']
          },
          {
            test: /\.less$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'less-loader'
            ]
          }
        ]
      },
      stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
      },
      performance: {
        hints: false
      }
    }
  });

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
  }
};
