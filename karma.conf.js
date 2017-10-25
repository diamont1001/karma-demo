// Karma configuration
// Generated on Wed Oct 25 2017 11:24:06 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'power-assert'],


    // list of files / patterns to load in the browser
    files: [
      // {pattern: 'test/**/*_test.js', watched: true}
      {pattern: 'test/*_test.js', watched: true}
    ],


    // list of files to exclude
    exclude: [
    ],

    // plugins
    plugins: [
        'karma-power-assert',
        'karma-mocha',
        'karma-webpack',
        'karma-chrome-launcher',
        'karma-coverage',
        'karma-mocha-reporter'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // add webpack as preprocessor
        'test/*_test.js': ['webpack'], // use 'babel-plugin-istanbul' instead of 'coverage'
        // 'test/**/*_test.js': ['webpack', 'coverage']
    },

    webpack: {
        module: {
            loaders: [
                {
                    test: /\.js$/, loader: 'babel-loader',
                    exclude: /(node_modules|libs)/,
                    query: {
                        presets: ['env'],
                        plugins: ['istanbul']
                    }
                }
            ]
        }
    },

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        // stats: 'errors-only'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha', 'coverage'],

    // mocha reporter options 
    mochaReporter: {
        symbols: {
            success: '+',
            info: '#',
            warning: '!',
            error: 'x'
        }
    },

    // coverage reporter options 
    coverageReporter: {
        type : 'html',
        dir : 'coverage',
        subdir: function(browser) {
            // normalization process to keep a consistent browser name across different
            // OS
            return browser.toLowerCase().split(/[ /-]/)[0];
        },
        includeAllSources: true
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
